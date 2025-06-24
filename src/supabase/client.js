import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ecxhohyvpyszimjnanqp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjeGhvaHl2cHlzemltam5hbnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTA3ODksImV4cCI6MjA2NjMyNjc4OX0.PNhfQounaR_AHp9wQFV5_-00KBY_2SaBxVn286sKMK8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,  // <--- Add this option to disable session persistence
  },
});

