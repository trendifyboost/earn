// Supabase Configuration
const SUPABASE_URL = 'https://wizzidmdnlmnhlpczzzq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpenppZG1kbmxtbmhscGN6enpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1ODI0NTksImV4cCI6MjA0OTE1ODQ1OX0.-bNKNDZK5n9YLDLKP1gpFQ0RbfozbN8ITnpFWSylPKw'; // Supabase এর API থেকে নিতে হবে।

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
