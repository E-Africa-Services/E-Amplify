import { createBrowserClient } from "@supabase/ssr"
import { hasSupabaseConfig } from "@/lib/env"

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!hasSupabaseConfig()) {
    // During build time or when env vars are missing, return a mock client to prevent errors
    if (typeof window === 'undefined') {
      return null as any
    }
    throw new Error(
      'Missing Supabase environment variables. Please check your .env.local file and ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.'
    )
  }

  return createBrowserClient(supabaseUrl!, supabaseAnonKey!)
}
