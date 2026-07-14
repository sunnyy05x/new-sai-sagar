const { createClient } = require('@supabase/supabase-js');
const db = createClient('https://uvvfbtkhhruxyzonrnnw.supabase.co', 'sb_publishable_kY1kjb5dQ4QYQvWNKWsPFw_nnZZySt9');

async function test() {
  const { data, error } = await db.from('settings').update({ tagline: 'Pure Veg Restaurant|theme=extra-light' }).eq('id', 'default');
  console.log("Update result:", data, error);
}
test();
