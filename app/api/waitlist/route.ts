import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'
import crypto from 'crypto'

// Validation schema
const waitlistSchema = z.object({
  name: z.string().min(1, 'Name is required').max(80, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  locale: z.enum(['da', 'en']).default('da'),
  utm: z.object({
    source: z.string().optional(),
    medium: z.string().optional(),
    campaign: z.string().optional(),
    content: z.string().optional(),
  }).optional(),
})

// Hash email for deduplication
function hashEmail(email: string): string {
  const normalized = email.toLowerCase().trim()
  return crypto.createHash('sha256').update(normalized).digest('hex')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validation = waitlistSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { 
          message: 'Validation failed', 
          errors: validation.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const { name, email, locale, utm } = validation.data
    const emailHash = hashEmail(email)

    // Check for duplicate using email hash
    const { data: existing, error: checkError } = await supabase
      .from('waitlist_submissions')
      .select('id')
      .eq('email_hash', emailHash)
      .single()

    if (existing) {
      console.log('⚠️  Duplicate submission attempt:', email)
      return NextResponse.json(
        { 
          message: 'Email already registered',
          reason: 'duplicate' 
        },
        { status: 409 }
      )
    }

    // Get user agent and other metadata
    const userAgent = request.headers.get('user-agent') || null
    const ipCountry = request.headers.get('cf-ipcountry') || 
                      request.headers.get('x-vercel-ip-country') || null

    // Insert new submission
    const { data: submission, error: insertError } = await supabase
      .from('waitlist_submissions')
      .insert({
        name,
        email: email.toLowerCase().trim(),
        email_hash: emailHash,
        locale,
        utm_source: utm?.source || null,
        utm_medium: utm?.medium || null,
        utm_campaign: utm?.campaign || null,
        utm_content: utm?.content || null,
        user_agent: userAgent,
        ip_country: ipCountry,
      })
      .select()
      .single()

    if (insertError) {
      console.error('❌ Database error:', insertError)
      return NextResponse.json(
        { message: 'Failed to save submission' },
        { status: 500 }
      )
    }

    // Enhanced console logging
    console.log('\n🎉 NEW WAITLIST SUBMISSION!')
    console.log('═══════════════════════════')
    console.log(`👤 Name:     ${name}`)
    console.log(`📧 Email:    ${email}`)
    console.log(`🌍 Locale:   ${locale}`)
    console.log(`🆔 ID:       ${submission.id}`)
    console.log(`📅 Time:     ${new Date().toLocaleString('da-DK')}`)
    if (utm?.source) console.log(`📊 UTM:      ${utm.source}/${utm.medium}/${utm.campaign}`)
    if (ipCountry) console.log(`🗺️  Country:  ${ipCountry}`)
    console.log('═══════════════════════════\n')

    // TODO: Send confirmation email here
    // await sendConfirmationEmail(submission)

    return NextResponse.json(
      { 
        status: 'ok',
        message: 'Successfully added to waitlist',
        id: submission.id
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('❌ Waitlist submission error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint for admin/testing
export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const limit = parseInt(searchParams.get('limit') || '100')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Fetch submissions from Supabase
    const { data: submissions, error, count } = await supabase
      .from('waitlist_submissions')
      .select('id, name, email, locale, created_at, confirmed_at', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { message: 'Failed to fetch submissions' },
        { status: 500 }
      )
    }

    // Get statistics
    const { data: stats } = await supabase.rpc('get_waitlist_stats')

    return NextResponse.json({
      count: count || 0,
      submissions: submissions || [],
      stats: stats || {},
      pagination: {
        limit,
        offset,
        hasMore: (count || 0) > offset + limit
      }
    })
  } catch (error) {
    console.error('Error fetching submissions:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
