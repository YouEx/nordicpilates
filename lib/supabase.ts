import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Database types
export interface WaitlistSubmission {
  id: string
  name: string
  email: string
  email_hash: string
  consent_at: string
  confirmed_at: string | null
  locale: string
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  created_at: string
  ip_country: string | null
  user_agent: string | null
}
