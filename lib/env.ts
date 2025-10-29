/**
 * Environment configuration validation
 * This file helps ensure all required environment variables are set
 */

export const env = {
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
} as const

/**
 * Validates that all required environment variables are present
 * Only runs in development and only on the client side
 */
export function validateEnv() {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    const missing = []
    
    if (!env.NEXT_PUBLIC_SUPABASE_URL) {
      missing.push('NEXT_PUBLIC_SUPABASE_URL')
    }
    
    if (!env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      missing.push('NEXT_PUBLIC_SUPABASE_ANON_KEY')
    }
    
    if (missing.length > 0) {
      console.error(
        `Missing required environment variables: ${missing.join(', ')}\n` +
        'Please check your .env.local file and ensure all required variables are set.\n' +
        'See .env.example for reference.'
      )
    }
  }
}

/**
 * Checks if Supabase environment variables are available
 */
export function hasSupabaseConfig(): boolean {
  return !!(env.NEXT_PUBLIC_SUPABASE_URL && env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}