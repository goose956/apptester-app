import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://modwajxddgqmmblywhmw.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZHdhanhkZGdxbW1ibHl3aG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDY5MTEsImV4cCI6MjA2NDYyMjkxMX0.LSMvztmDiMXnzNPH0a78zvuQ9qjQlFxVokBu9l5Nl8g";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database table helpers for apptester
export const appTesterTables = {
  feedback: "apptester_feedback",
  contacts: "apptester_contacts",
  surveys: "apptester_surveys",
  users: "apptester_users",
  sessions: "apptester_sessions"
};