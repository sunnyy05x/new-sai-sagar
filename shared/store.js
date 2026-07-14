/**
 * Data Store — Supabase CRUD + Real-time sync + In-memory cache
 * New Sai Sagar Restaurant Management System
 */
(function () {
  'use strict';

  window.SaiSagar = window.SaiSagar || {};

  /* ── Supabase Configuration ─────────────────────────── */
  var SUPABASE_URL = 'https://uvvfbtkhhruxyzonrnnw.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_kY1kjb5dQ4QYQvWNKWsPFw_nnZZySt9';
  
  // Wait for supabase library to load from CDN
  var db = null;
  var realtimeChannel = null;

  /* ── Constants ──────────────────────────────────────── */
  var EVENTS = {
    READY: 'READY',
    ORDER_CREATED: 'ORDER_CREATED',
    ORDER_UPDATED: 'ORDER_UPDATED',
    ORDER_STATUS: 'ORDER_STATUS',
    MENU_UPDATED: 'MENU_UPDATED',
    TABLE_UPDATED: 'TABLE_UPDATED',
    BILL_CREATED: 'BILL_CREATED',
    DATA_RESET: 'DATA_RESET'
  };

  /* ── In-Memory Cache ────────────────────────────────── */
  var cache = {
    menu: [],
    orders: [],
    tables: [],
    bills: [],
    settings: {}
  };

  /* ── Local Event Emitter ────────────────────────────── */
  var listeners = [];

  function broadcast(type, payload) {
    var msg = { type: type, payload: payload, timestamp: Date.now() };
    listeners.forEach(function (cb) { try { cb(msg); } catch (e) { } });
  }

  function onMessage(callback) {
    listeners.push(callback);
  }

  /* ── Menu Store ─────────────────────────────────────── */
  var MenuStore = {
    getAll: function () { return cache.menu; },
    getById: function (id) { return cache.menu.find(function (item) { return item.id === id; }); },
    getByCategory: function (cat) { return cache.menu.filter(function (item) { return item.category === cat; }); },
    getAvailable: function () { return cache.menu.filter(function (item) { return item.isAvailable; }); },
    getCategories: function () {
      var cats = [];
      cache.menu.forEach(function (item) { if (cats.indexOf(item.category) === -1) cats.push(item.category); });
      return cats;
    },
    add: function (item) {
      item.id = item.id || SaiSagar.Utils.generateId('mi');
      // Optimistic update
      cache.menu.push(item);
      broadcast(EVENTS.MENU_UPDATED, { action: 'add', item: item });
      // Send to Supabase
      if (db) db.from('menu').insert([{
        id: item.id, name: item.name, category: item.category, price: item.price,
        description: item.description, emoji: item.icon, is_available: item.isAvailable, is_jain_available: item.isJainAvailable
      }]).then();
      return item;
    },
    update: function (id, updates) {
      var idx = cache.menu.findIndex(function (item) { return item.id === id; });
      if (idx === -1) return null;
      Object.assign(cache.menu[idx], updates);
      broadcast(EVENTS.MENU_UPDATED, { action: 'update', item: cache.menu[idx] });
      
      var dbUpdates = {};
      if (updates.name !== undefined) dbUpdates.name = updates.name;
      if (updates.category !== undefined) dbUpdates.category = updates.category;
      if (updates.price !== undefined) dbUpdates.price = updates.price;
      if (updates.description !== undefined) dbUpdates.description = updates.description;
      if (updates.icon !== undefined) dbUpdates.emoji = updates.icon;
      if (updates.isAvailable !== undefined) dbUpdates.is_available = updates.isAvailable;
      if (updates.isJainAvailable !== undefined) dbUpdates.is_jain_available = updates.isJainAvailable;
      
      if (db) db.from('menu').update(dbUpdates).eq('id', id).then();
      return cache.menu[idx];
    },
    remove: function (id) {
      cache.menu = cache.menu.filter(function (item) { return item.id !== id; });
      broadcast(EVENTS.MENU_UPDATED, { action: 'delete', id: id });
      if (db) db.from('menu').delete().eq('id', id).then();
    },
    toggleAvailability: function (id) {
      var item = this.getById(id);
      if (item) this.update(id, { isAvailable: !item.isAvailable });
    }
  };

  /* ── Order Store ────────────────────────────────────── */
  var OrderStore = {
    getAll: function () { return cache.orders; },
    getById: function (id) { return cache.orders.find(function (o) { return o.id === id; }); },
    getActive: function () { return cache.orders.filter(function (o) { return ['new', 'preparing', 'ready', 'served'].indexOf(o.status) !== -1; }); },
    getByStatus: function (status) { return cache.orders.filter(function (o) { return o.status === status; }); },
    getByTable: function (tableNumber) {
      return cache.orders.filter(function (o) {
        return o.tableNumber === tableNumber && ['new', 'preparing', 'ready', 'served'].indexOf(o.status) !== -1;
      });
    },
    getTodaysOrders: function () { return cache.orders.filter(function (o) { return SaiSagar.Utils.isToday(o.createdAt); }); },
    create: function (tableNumber, items) {
      var order = {
        id: SaiSagar.Utils.generateId('ord'),
        orderNumber: SaiSagar.Utils.generateOrderNumber(),
        tableNumber: (tableNumber === 'Parcel' || isNaN(parseInt(tableNumber, 10))) ? tableNumber : parseInt(tableNumber, 10),
        items: items.map(function (item) {
          return {
            menuItemId: item.id, name: item.name, price: item.price, quantity: item.quantity,
            specialInstructions: item.specialInstructions || '', emoji: item.icon || '🍽️'
          };
        }),
        status: 'new',
        totalAmount: items.reduce(function (sum, item) { return sum + (item.price * item.quantity); }, 0),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        statusHistory: [{ status: 'new', at: new Date().toISOString() }]
      };
      
      cache.orders.push(order);
      TableStore.update(tableNumber, { status: 'occupied', currentOrderId: order.id });
      broadcast(EVENTS.ORDER_CREATED, order);

      if (db) {
        db.from('orders').insert([{
          id: order.id, order_number: order.orderNumber, table_number: order.tableNumber,
          items: order.items, status: order.status, total_amount: order.totalAmount,
          created_at: order.createdAt, updated_at: order.updatedAt, status_history: order.statusHistory
        }]).then();
      }
      return order;
    },
    updateStatus: function (id, newStatus) {
      var idx = cache.orders.findIndex(function (o) { return o.id === id; });
      if (idx === -1) return null;
      var now = new Date().toISOString();
      cache.orders[idx].status = newStatus;
      cache.orders[idx].updatedAt = now;
      cache.orders[idx].statusHistory.push({ status: newStatus, at: now });

      if (newStatus === 'billed') {
        TableStore.update(cache.orders[idx].tableNumber, { status: 'available', currentOrderId: null });
      }

      broadcast(EVENTS.ORDER_STATUS, { orderId: id, status: newStatus, order: cache.orders[idx] });

      if (db) {
        db.from('orders').update({
          status: newStatus, updated_at: now, status_history: cache.orders[idx].statusHistory
        }).eq('id', id).then();
      }
      return cache.orders[idx];
    },
    update: function (id, updates) {
      var idx = cache.orders.findIndex(function (o) { return o.id === id; });
      if (idx === -1) return null;
      updates.updatedAt = new Date().toISOString();
      Object.assign(cache.orders[idx], updates);
      broadcast(EVENTS.ORDER_UPDATED, cache.orders[idx]);
      
      var dbUpdates = { updated_at: updates.updatedAt };
      if (updates.status) dbUpdates.status = updates.status;
      if (updates.items) dbUpdates.items = updates.items;
      if (updates.totalAmount) dbUpdates.total_amount = updates.totalAmount;
      if (updates.statusHistory) dbUpdates.status_history = updates.statusHistory;
      
      if (db) db.from('orders').update(dbUpdates).eq('id', id).then();
      return cache.orders[idx];
    }
  };

  /* ── Table Store ────────────────────────────────────── */
  var TableStore = {
    getAll: function () { return cache.tables; },
    getByNumber: function (num) { num = parseInt(num, 10); return cache.tables.find(function (t) { return t.number === num; }); },
    update: function (num, updates) {
      num = parseInt(num, 10);
      var idx = cache.tables.findIndex(function (t) { return t.number === num; });
      if (idx === -1) return null;
      Object.assign(cache.tables[idx], updates);
      broadcast(EVENTS.TABLE_UPDATED, cache.tables[idx]);
      
      var dbUpdates = {};
      if (updates.status !== undefined) dbUpdates.status = updates.status;
      if (updates.capacity !== undefined) dbUpdates.capacity = updates.capacity;
      if (updates.currentOrderId !== undefined) dbUpdates.current_order_id = updates.currentOrderId;
      
      if (db) db.from('tables').update(dbUpdates).eq('number', num).then();
      return cache.tables[idx];
    },
    add: function (table) {
      cache.tables.push(table);
      broadcast(EVENTS.TABLE_UPDATED, { action: 'add' });
      if (db) db.from('tables').insert([{
        number: table.number, capacity: table.capacity, status: table.status, current_order_id: table.currentOrderId
      }]).then();
    },
    remove: function (num) {
      num = parseInt(num, 10);
      cache.tables = cache.tables.filter(function (t) { return t.number !== num; });
      broadcast(EVENTS.TABLE_UPDATED, { action: 'remove', number: num });
      if (db) db.from('tables').delete().eq('number', num).then();
    }
  };

  /* ── Bill Store ─────────────────────────────────────── */
  var BillStore = {
    getAll: function () { return cache.bills; },
    getById: function (id) { return cache.bills.find(function (b) { return b.id === id; }); },
    getTodays: function () { return cache.bills.filter(function (b) { return SaiSagar.Utils.isToday(b.createdAt); }); },
    generate: function (orderId, options) {
      options = options || {};
      var order = OrderStore.getById(orderId);
      if (!order) return null;

      var settings = SettingsStore.get();
      var subtotal = order.totalAmount;
      var discountType = options.discountType || 'flat';
      var discountValue = parseFloat(options.discountValue) || 0;
      var discount = discountType === 'percent' ? (subtotal * discountValue / 100) : discountValue;
      var afterDiscount = subtotal - discount;
      var gstRate = settings.gstRate || 5;
      var gstAmount = afterDiscount * gstRate / 100;
      var serviceChargeRate = settings.serviceChargeRate || 0;
      var serviceCharge = afterDiscount * serviceChargeRate / 100;
      var grandTotal = afterDiscount + gstAmount + serviceCharge;

      var bill = {
        id: SaiSagar.Utils.generateId('bill'),
        billNumber: SaiSagar.Utils.generateBillNumber(),
        orderId: orderId, orderNumber: order.orderNumber, tableNumber: order.tableNumber, items: order.items,
        subtotal: subtotal, discount: discount, discountType: discountType, discountValue: discountValue,
        gstRate: gstRate, cgst: gstAmount / 2, sgst: gstAmount / 2, gstAmount: gstAmount,
        serviceChargeRate: serviceChargeRate, serviceCharge: serviceCharge, grandTotal: Math.round(grandTotal * 100) / 100,
        paymentMode: options.paymentMode || 'cash', createdAt: new Date().toISOString(),
        restaurantName: settings.restaurantName, address: settings.address, phone: settings.phone,
        gstin: settings.gstin, receiptFooter: settings.receiptFooter
      };

      cache.bills.push(bill);
      OrderStore.updateStatus(orderId, 'billed');
      broadcast(EVENTS.BILL_CREATED, bill);

      if (db) {
        db.from('bills').insert([{
          id: bill.id, bill_number: bill.billNumber, order_id: bill.orderId, order_number: bill.orderNumber,
          table_number: bill.tableNumber, items: bill.items, subtotal: bill.subtotal, discount: bill.discount,
          discount_type: bill.discountType, discount_value: bill.discountValue, gst_rate: bill.gstRate,
          cgst: bill.cgst, sgst: bill.sgst, gst_amount: bill.gstAmount, service_charge_rate: bill.serviceChargeRate,
          service_charge: bill.serviceCharge, grand_total: bill.grandTotal, payment_mode: bill.paymentMode,
          created_at: bill.createdAt, restaurant_name: bill.restaurantName, address: bill.address,
          phone: bill.phone, gstin: bill.gstin, receipt_footer: bill.receiptFooter
        }]).then();
      }
      return bill;
    },
    getTodaysSummary: function () {
      var bills = this.getTodays();
      var summary = { totalRevenue: 0, totalOrders: bills.length, totalDiscount: 0, totalGST: 0, byPaymentMode: { cash: 0, upi: 0, card: 0 }, bills: bills };
      bills.forEach(function (b) {
        summary.totalRevenue += b.grandTotal; summary.totalDiscount += b.discount; summary.totalGST += b.gstAmount;
        var mode = b.paymentMode || 'cash'; summary.byPaymentMode[mode] = (summary.byPaymentMode[mode] || 0) + b.grandTotal;
      });
      return summary;
    }
  };

  /* ── Settings Store ─────────────────────────────────── */
  var SettingsStore = {
    get: function () { return cache.settings; },
    update: function (updates) {
      Object.assign(cache.settings, updates);
      if (db) {
        var dbUpdates = {
          restaurant_name: cache.settings.restaurantName, tagline: cache.settings.tagline,
          address: cache.settings.address, phone: cache.settings.phone, gstin: cache.settings.gstin,
          gst_rate: cache.settings.gstRate, service_charge_rate: cache.settings.serviceChargeRate,
          receipt_footer: cache.settings.receiptFooter,
          theme: cache.settings.theme || 'dark'
        };
        db.from('settings').update(dbUpdates).eq('id', 'default').then();
      }
      return cache.settings;
    }
  };

  /* ── Initialization & Data Loading ──────────────────── */
  async function init() {
    if (window.supabase) {
      db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      await loadInitialData();
      setupRealtimeSubscriptions();
    } else {
      console.warn("Supabase library not loaded!");
    }
    broadcast(EVENTS.READY, {});
  }

  async function loadInitialData() {
    try {
      var pMenu = db.from('menu').select('*');
      var pOrders = db.from('orders').select('*');
      var pTables = db.from('tables').select('*');
      var pBills = db.from('bills').select('*');
      var pSettings = db.from('settings').select('*').eq('id', 'default').single();

      var results = await Promise.all([pMenu, pOrders, pTables, pBills, pSettings]);

      if (results[0].data) {
        cache.menu = results[0].data.map(function(m) {
          return { id: m.id, name: m.name, category: m.category, price: m.price, description: m.description, icon: m.emoji, isAvailable: m.is_available, isJainAvailable: m.is_jain_available };
        });
      }
      if (results[1].data) {
        cache.orders = results[1].data.map(function(o) {
          return { id: o.id, orderNumber: o.order_number, tableNumber: o.table_number, items: o.items, status: o.status, totalAmount: o.total_amount, createdAt: o.created_at, updatedAt: o.updated_at, statusHistory: o.status_history };
        });
      }
      if (results[2].data) {
        cache.tables = results[2].data.map(function(t) {
          return { number: t.number, capacity: t.capacity, status: t.status, currentOrderId: t.current_order_id };
        });
      }
      if (results[3].data) {
        cache.bills = results[3].data.map(function(b) {
          return {
            id: b.id, billNumber: b.bill_number, orderId: b.order_id, orderNumber: b.order_number, tableNumber: b.table_number, items: b.items,
            subtotal: b.subtotal, discount: b.discount, discountType: b.discount_type, discountValue: b.discount_value, gstRate: b.gst_rate,
            cgst: b.cgst, sgst: b.sgst, gstAmount: b.gst_amount, serviceChargeRate: b.service_charge_rate, serviceCharge: b.service_charge,
            grandTotal: b.grand_total, paymentMode: b.payment_mode, createdAt: b.created_at, restaurantName: b.restaurant_name,
            address: b.address, phone: b.phone, gstin: b.gstin, receiptFooter: b.receipt_footer
          };
        });
      }
      if (results[4].data) {
        var s = results[4].data;
        var globalTheme = s.theme || 'dark';
        
        localStorage.setItem('ssg_theme', globalTheme);
        document.documentElement.setAttribute('data-theme', globalTheme);
        
        cache.settings = {
          restaurantName: s.restaurant_name, tagline: s.tagline, address: s.address, phone: s.phone,
          gstin: s.gstin, gstRate: s.gst_rate, serviceChargeRate: s.service_charge_rate, receiptFooter: s.receipt_footer,
          theme: globalTheme
        };
      } else {
        cache.settings = SaiSagar.defaultSettings; // fallback
      }
    } catch (e) {
      console.error("Failed to load initial data from Supabase", e);
    }
  }

  function setupRealtimeSubscriptions() {
    realtimeChannel = db.channel('saisagar-all');
    realtimeChannel
      .on('postgres_changes', { event: '*', schema: 'public', table: 'menu' }, function(payload) {
        if (payload.eventType === 'INSERT') {
          var m = payload.new;
          if (!cache.menu.find(function(x) { return x.id === m.id; })) {
            cache.menu.push({ id: m.id, name: m.name, category: m.category, price: m.price, description: m.description, icon: m.emoji, isAvailable: m.is_available, isJainAvailable: m.is_jain_available });
            broadcast(EVENTS.MENU_UPDATED, { action: 'add' });
          }
        } else if (payload.eventType === 'UPDATE') {
          var m = payload.new;
          var idx = cache.menu.findIndex(function(x) { return x.id === m.id; });
          if (idx !== -1) {
            Object.assign(cache.menu[idx], { name: m.name, category: m.category, price: m.price, description: m.description, icon: m.emoji, isAvailable: m.is_available, isJainAvailable: m.is_jain_available });
            broadcast(EVENTS.MENU_UPDATED, { action: 'update' });
          }
        } else if (payload.eventType === 'DELETE') {
          cache.menu = cache.menu.filter(function(x) { return x.id !== payload.old.id; });
          broadcast(EVENTS.MENU_UPDATED, { action: 'delete' });
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, function(payload) {
        if (payload.eventType === 'INSERT') {
          var o = payload.new;
          if (!cache.orders.find(function(x) { return x.id === o.id; })) {
            var order = { id: o.id, orderNumber: o.order_number, tableNumber: o.table_number, items: o.items, status: o.status, totalAmount: o.total_amount, createdAt: o.created_at, updatedAt: o.updated_at, statusHistory: o.status_history };
            cache.orders.push(order);
            broadcast(EVENTS.ORDER_CREATED, order);
          }
        } else if (payload.eventType === 'UPDATE') {
          var o = payload.new;
          var idx = cache.orders.findIndex(function(x) { return x.id === o.id; });
          if (idx !== -1) {
            var oldStatus = cache.orders[idx].status;
            Object.assign(cache.orders[idx], { items: o.items, status: o.status, totalAmount: o.total_amount, updatedAt: o.updated_at, statusHistory: o.status_history });
            if (oldStatus !== o.status) {
              broadcast(EVENTS.ORDER_STATUS, { orderId: o.id, status: o.status, order: cache.orders[idx] });
            }
            broadcast(EVENTS.ORDER_UPDATED, cache.orders[idx]);
          }
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tables' }, function(payload) {
        if (payload.eventType === 'UPDATE') {
          var t = payload.new;
          var idx = cache.tables.findIndex(function(x) { return x.number === t.number; });
          if (idx !== -1) {
            Object.assign(cache.tables[idx], { capacity: t.capacity, status: t.status, currentOrderId: t.current_order_id });
            broadcast(EVENTS.TABLE_UPDATED, cache.tables[idx]);
          }
        } else if (payload.eventType === 'INSERT') {
          var t = payload.new;
          if (!cache.tables.find(function(x) { return x.number === t.number; })) {
            cache.tables.push({ number: t.number, capacity: t.capacity, status: t.status, currentOrderId: t.current_order_id });
            broadcast(EVENTS.TABLE_UPDATED, { action: 'add' });
          }
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'bills' }, function(payload) {
        if (payload.eventType === 'INSERT') {
          var b = payload.new;
          if (!cache.bills.find(function(x) { return x.id === b.id; })) {
            var bill = {
              id: b.id, billNumber: b.bill_number, orderId: b.order_id, orderNumber: b.order_number, tableNumber: b.table_number, items: b.items,
              subtotal: b.subtotal, discount: b.discount, discountType: b.discount_type, discountValue: b.discount_value, gstRate: b.gst_rate,
              cgst: b.cgst, sgst: b.sgst, gstAmount: b.gst_amount, serviceChargeRate: b.service_charge_rate, serviceCharge: b.service_charge,
              grandTotal: b.grand_total, paymentMode: b.payment_mode, createdAt: b.created_at, restaurantName: b.restaurant_name,
              address: b.address, phone: b.phone, gstin: b.gstin, receiptFooter: b.receipt_footer
            };
            cache.bills.push(bill);
            broadcast(EVENTS.BILL_CREATED, bill);
          }
        }
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'settings' }, function(payload) {
        if (payload.new && payload.new.id === 'default') {
          var s = payload.new;
          var newTheme = s.theme || 'dark';
          
          localStorage.setItem('ssg_theme', newTheme);
          document.documentElement.setAttribute('data-theme', newTheme);
          window.dispatchEvent(new CustomEvent('global_theme_changed', { detail: newTheme }));
          
          Object.assign(cache.settings, {
            restaurantName: s.restaurant_name, tagline: s.tagline, address: s.address, phone: s.phone,
            gstin: s.gstin, gstRate: s.gst_rate, serviceChargeRate: s.service_charge_rate, receiptFooter: s.receipt_footer,
            theme: newTheme
          });
        }
      })
      .subscribe();
  }

  function resetAll() {
    // Only for demo purposes - clear supabase tables
    if (db) {
      db.from('bills').delete().neq('id', '0').then(function() {
        db.from('orders').delete().neq('id', '0').then(function() {
          db.from('tables').delete().neq('number', 0).then(function() {
            db.from('menu').delete().neq('id', '0').then(function() {
              // Seed defaults
              var menuInserts = SaiSagar.defaultMenu.map(function(m) {
                return { id: m.id, name: m.name, category: m.category, price: m.price, description: m.description, icon: m.emoji, is_available: m.isAvailable, is_jain_available: m.isJainAvailable };
              });
              db.from('menu').insert(menuInserts).then();

              var tableInserts = SaiSagar.defaultTables.map(function(t) {
                return { number: t.number, capacity: t.capacity, status: t.status, current_order_id: t.currentOrderId };
              });
              db.from('tables').insert(tableInserts).then();

              var s = SaiSagar.defaultSettings;
              db.from('settings').upsert({
                id: 'default', restaurant_name: s.restaurantName, tagline: s.tagline, address: s.address, phone: s.phone,
                gstin: s.gstin, gst_rate: s.gstRate, service_charge_rate: s.serviceChargeRate, receipt_footer: s.receiptFooter
              }).then();
              
              broadcast(EVENTS.DATA_RESET, {});
            });
          });
        });
      });
    }
  }

  /* ── Export ──────────────────────────────────────────── */
  window.SaiSagar.Store = {
    MenuStore: MenuStore,
    OrderStore: OrderStore,
    TableStore: TableStore,
    BillStore: BillStore,
    SettingsStore: SettingsStore,
    init: init,
    resetAll: resetAll,
    EVENTS: EVENTS,
    setGlobalTheme: function(theme) {
      SettingsStore.update({ theme: theme });
    }
  };

  window.SaiSagar.Sync = {
    broadcast: broadcast,
    onMessage: onMessage,
    EVENTS: EVENTS
  };
})();
