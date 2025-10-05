import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Count total waitlist submissions
    const { count, error } = await supabase
      .from('waitlist_submissions')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Error fetching waitlist count:', error)
      return NextResponse.json(
        { count: 0, error: 'Failed to fetch count' },
        { status: 500 }
      )
    }

    return NextResponse.json({ count: count || 0 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { count: 0, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Enable caching for 30 seconds
export const revalidate = 30
