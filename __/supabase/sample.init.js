if (typeof supabase === 'undefined') throw new Error('hosting/init-error: Supabase SDK not detected. You must include it before /__/supabase/init.js');

supabase.initializeApp = function (config) {
    supabase = supabase.createClient(config.SUPABASE_URL, config.SUPABASE_KEY);
}

supabase.initializeApp({
     SUPABASE_URL: "**URL_HERE**",
     SUPABASE_KEY: "**KEY_HERE**"
});