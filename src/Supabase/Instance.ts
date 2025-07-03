import { createClient,SupabaseClient } from "@supabase/supabase-js";

function SupabaseInstance():SupabaseClient{
    const Instance:SupabaseClient=  createClient(import.meta.env.VITE_SUPABASE_PROJECT_URL,import.meta.env.VITE_SUPABASE_API_KEY)
    
    return Instance
}

const Instance=SupabaseInstance()

export default Instance