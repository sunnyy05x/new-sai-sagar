/**
 * Utility Functions for New Sai Sagar Restaurant System
 */
(function () {
  'use strict';

  window.SaiSagar = window.SaiSagar || {};

  const Utils = {

    /* ── Currency ────────────────────────────────────── */
    formatCurrency(amount) {
      return '₹' + Number(amount).toFixed(2);
    },

    formatCurrencyShort(amount) {
      return '₹' + Math.round(Number(amount));
    },

    /* ── Date / Time ────────────────────────────────── */
    formatDate(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      });
    },

    formatTime(dateStr) {
      const d = new Date(dateStr);
      return d.toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit', hour12: true
      });
    },

    formatDateTime(dateStr) {
      return Utils.formatDate(dateStr) + ' ' + Utils.formatTime(dateStr);
    },

    /* ── ID Generators ──────────────────────────────── */
    generateId(prefix) {
      prefix = prefix || 'id';
      return prefix + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 6);
    },

    generateOrderNumber() {
      var count = parseInt(localStorage.getItem('ssg_order_counter') || '0', 10) + 1;
      localStorage.setItem('ssg_order_counter', count.toString());
      return 'ORD-' + count.toString().padStart(4, '0');
    },

    generateBillNumber() {
      var today = new Date();
      var dateStr = today.getFullYear().toString() +
        (today.getMonth() + 1).toString().padStart(2, '0') +
        today.getDate().toString().padStart(2, '0');
      var count = parseInt(localStorage.getItem('ssg_bill_counter_' + dateStr) || '0', 10) + 1;
      localStorage.setItem('ssg_bill_counter_' + dateStr, count.toString());
      return 'SSG-' + dateStr + '-' + count.toString().padStart(4, '0');
    },

    /* ── Time Helpers ───────────────────────────────── */
    getTimeSince(dateStr) {
      var now = Date.now();
      var then = new Date(dateStr).getTime();
      var diff = Math.floor((now - then) / 1000);
      if (diff < 60) return diff + 's ago';
      if (diff < 3600) return Math.floor(diff / 60) + ' min ago';
      if (diff < 86400) return Math.floor(diff / 3600) + ' hr ago';
      return Math.floor(diff / 86400) + ' days ago';
    },

    getMinutesSince(dateStr) {
      return Math.floor((Date.now() - new Date(dateStr).getTime()) / 60000);
    },

    getElapsedDisplay(dateStr) {
      var mins = Utils.getMinutesSince(dateStr);
      if (mins < 1) return 'Just now';
      if (mins < 60) return mins + ' min';
      return Math.floor(mins / 60) + 'h ' + (mins % 60) + 'm';
    },

    /* ── Sound ──────────────────────────────────────── */
    playNotificationSound(type) {
      try {
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        var freqs = { order: [660, 880], ready: [880, 1100], alert: [440, 330] };
        var tones = freqs[type] || freqs.order;

        tones.forEach(function (freq, i) {
          var osc = audioCtx.createOscillator();
          var gain = audioCtx.createGain();
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.frequency.value = freq;
          osc.type = 'sine';
          var start = audioCtx.currentTime + i * 0.15;
          gain.gain.setValueAtTime(0.25, start);
          gain.gain.exponentialRampToValueAtTime(0.01, start + 0.2);
          osc.start(start);
          osc.stop(start + 0.2);
        });
      } catch (e) {
        // Silence errors on unsupported browsers
      }
    },

    /* ── Toast Notifications ────────────────────────── */
    showToast(message, type, duration) {
      type = type || 'info';
      duration = duration || 3500;

      var container = document.getElementById('toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
      }

      var icons = { success: 'check-circle', error: 'x-circle', warning: 'alert-triangle', info: 'info' };
      var toast = document.createElement('div');
      toast.className = 'toast toast-' + type;
      toast.innerHTML =
        '<span class="toast-icon"><i data-lucide="' + (icons[type] || 'info') + '"></i></span>' +
        '<span class="toast-message">' + message + '</span>';

      container.appendChild(toast);
      requestAnimationFrame(function () {
        toast.classList.add('toast-show');
      });

      setTimeout(function () {
        toast.classList.remove('toast-show');
        setTimeout(function () { toast.remove(); }, 300);
      }, duration);
    },

    /* ── Date Helpers ───────────────────────────────── */
    today() {
      var d = new Date();
      return d.getFullYear() + '-' +
        (d.getMonth() + 1).toString().padStart(2, '0') + '-' +
        d.getDate().toString().padStart(2, '0');
    },

    isToday(dateStr) {
      return Utils.formatDate(dateStr) === Utils.formatDate(new Date().toISOString());
    },

    /* ── Misc ───────────────────────────────────────── */
    initIcons() {
      if (window.lucide) {
        lucide.createIcons();
        var debouncedCreateIcons = SaiSagar.Utils.debounce(() => {
          if (window.lucide) lucide.createIcons();
        }, 50);
        
        var observer = new MutationObserver(function(mutations) {
          var hasNewNodes = mutations.some(m => m.addedNodes.length > 0);
          if (hasNewNodes) debouncedCreateIcons();
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
    },
    
    debounce(fn, delay) {
      var timer;
      return function () {
        var args = arguments;
        var ctx = this;
        clearTimeout(timer);
        timer = setTimeout(function () { fn.apply(ctx, args); }, delay);
      };
    },

    escapeHtml(str) {
      var div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    },

    getUrlParam(name) {
      return new URLSearchParams(window.location.search).get(name);
    }
  };

  window.SaiSagar.Utils = Utils;

  // Auto-initialize icons when the DOM is ready
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      if (window.SaiSagar && window.SaiSagar.Utils) {
        window.SaiSagar.Utils.initIcons();
      }
    }, 100);
  });

  // Auto-apply theme on script load
  (function () {
    var theme = localStorage.getItem('ssg_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    // Listen for storage changes to sync theme across tabs instantly
    window.addEventListener('storage', function (e) {
      if (e.key === 'ssg_theme' && e.newValue) {
        document.documentElement.setAttribute('data-theme', e.newValue);
      }
    });
  })();
})();
