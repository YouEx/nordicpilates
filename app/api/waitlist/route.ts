import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'
import crypto from 'crypto'

// Validation schema
const waitlistSchema = z.object({
  name: z.string().min(1, 'Name is required').max(80, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  locale: z.enum(['da', 'en']).default('da'),
})

// Simple in-memory storage (replace with database in production)
const submissions: Array<{
  id: string
  name: string
  email: string
  emailHash: string
  consentAt: string
  confirmedAt: string | null
  locale: string
  createdAt: string
}> = []

// File path for logging submissions
const LOG_FILE = path.join(process.cwd(), 'waitlist-submissions.log')
const DATA_FILE = path.join(process.cwd(), 'waitlist-data.json')

// Hash email for deduplication
function hashEmail(email: string): string {
  const normalized = email.toLowerCase().trim()
  // Simple hash for demo - use proper hashing in production
  return Buffer.from(normalized).toString('base64')
}

// Load existing submissions from file on startup
async function loadSubmissions() {
  try {
    if (existsSync(DATA_FILE)) {
      const data = await readFile(DATA_FILE, 'utf-8')
      const loaded = JSON.parse(data)
      submissions.push(...loaded)
      console.log(`📥 Loaded ${submissions.length} existing submissions`)
    }
  } catch (error) {
    console.error('Error loading submissions:', error)
  }
}

// Save submissions to file
async function saveSubmissions() {
  try {
    await writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf-8')
  } catch (error) {
    console.error('Error saving submissions:', error)
  }
}

// Log submission to file
async function logSubmission(submission: any) {
  const logEntry = `[${new Date().toISOString()}] NEW SUBMISSION
Name: ${submission.name}
Email: ${submission.email}
Locale: ${submission.locale}
ID: ${submission.id}
---
`
  try {
    await appendFile(LOG_FILE, logEntry, 'utf-8')
    console.log('✅ Logged to file:', LOG_FILE)
  } catch (error) {
    console.error('Error writing to log file:', error)
  }
}

// Load submissions when the module is first imported
loadSubmissions()

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

    const { name, email, locale } = validation.data
    const emailHash = hashEmail(email)

    // Check for duplicate
    const existing = submissions.find(sub => sub.emailHash === emailHash)
    if (existing) {
      return NextResponse.json(
        { 
          message: 'Email already registered',
          reason: 'duplicate' 
        },
        { status: 409 }
      )
    }

    // Create new submission
    const submission = {
      id: crypto.randomUUID(),
      name,
      email: email.toLowerCase().trim(),
      emailHash,
      consentAt: new Date().toISOString(),
      confirmedAt: null, // Would be set after email confirmation
      locale,
      createdAt: new Date().toISOString(),
    }

    submissions.push(submission)

    // Log to file and save data
    await logSubmission(submission)
    await saveSubmissions()

    // Enhanced console logging
    console.log('\n🎉 NEW WAITLIST SUBMISSION!')
    console.log('═══════════════════════════')
    console.log(`👤 Name:     ${name}`)
    console.log(`📧 Email:    ${email}`)
    console.log(`🌍 Locale:   ${locale}`)
    console.log(`🆔 ID:       ${submission.id}`)
    console.log(`📅 Time:     ${new Date().toLocaleString('da-DK')}`)
    console.log(`📊 Total:    ${submissions.length} submissions`)
    console.log('═══════════════════════════\n')

    // In production, send confirmation email here

    return NextResponse.json(
      { 
        status: 'ok',
        message: 'Successfully added to waitlist' 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint for testing/admin
export async function GET() {
  return NextResponse.json({
    count: submissions.length,
    submissions: submissions.map(sub => ({
      name: sub.name,
      email: sub.email,
      locale: sub.locale,
      createdAt: sub.createdAt,
    })),
  })
}
