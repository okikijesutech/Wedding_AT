// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mock supabase for now until it's set up
export const supabase = {
  from: () => ({
    insert: async () => ({ error: null }),
  }),
};

