const SUPABASE_URL =
"https://sycuueukzazluxoyhozn.supabase.co";

const SUPABASE_KEY =
"sb_publishable_kLdCZ4D1xPR5jpTpENFxSA_Y9iuGtjz";

// Buat koneksi Supabase secara global
window.supabaseClient =
window.supabase.createClient(
SUPABASE_URL,
SUPABASE_KEY
);
