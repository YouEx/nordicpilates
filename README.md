# Nordic Pilates — Waitlist Landing Page

A minimal, elegant landing page for Nordic Pilates built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Full-screen immersive hero with video/image support
- 🎬 Auto-playing background video (or image fallback)
- 📝 Waitlist signup form with GDPR compliance
- ✅ Form validation and error handling
- 📱 Fully responsive design
- ♿ WCAG 2.2 AA accessibility compliant
- 🎨 Custom Nordic color palette and typography
- 🚀 Built with Next.js 14 and React 18
- ⚡ Smooth animations and transitions

## Design Principles

Based on Scandinavian design aesthetics:
- **Generous white space** for calm and clarity
- **Minimal color palette**: Snow, Porcelain, Graphite, Fog, Ice-blue
- **Typography**: Inter (UI/body) + Cormorant Garamond (display)
- **8-point spacing system** for consistent rhythm
- **Subtle interactions** with 150-250ms transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. **Add your studio image or video**:
   
   **For Image:**
   - Save your studio image as `public/studio.jpg`
   - Recommended size: 1920x1080px or larger
   - Format: JPG, PNG, or WebP
   
   **For Video (Recommended):**
   - Save your studio video as `public/studio.mp4`
   - Recommended size: 1920x1080px (Full HD)
   - Keep file size under 10MB
   - 10-30 seconds, will loop automatically
   - Format: MP4 (H.264 codec)
   
   The page will automatically detect and display video if available, otherwise falls back to image, or uses an elegant gradient.

3. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /api
    /waitlist       # API endpoint for form submissions
  /privacy          # Privacy policy page
  layout.tsx        # Root layout with fonts
  page.tsx          # Main landing page
  globals.css       # Global styles and Tailwind

/components
  WaitlistForm.tsx  # Waitlist signup form component

tailwind.config.js  # Tailwind configuration
tsconfig.json       # TypeScript configuration
```

## Form Validation

The waitlist form includes:
- Name validation (1-80 characters)
- Email validation (RFC 5322 compliant)
- Required GDPR consent checkbox
- Duplicate email detection
- Inline error messages
- Success and error states

## API Endpoints

### POST /api/waitlist

Submit a new waitlist entry.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "locale": "da" | "en"
}
```

**Responses:**
- `201`: Successfully added
- `400`: Validation error
- `409`: Email already registered
- `500`: Server error

### GET /api/waitlist

Get all submissions (for testing/admin).

## Backend: Supabase

The waitlist uses **Supabase** as the backend database:
- 🗄️ PostgreSQL database in EU region (GDPR compliant)
- 🔒 Row Level Security (RLS) enabled
- 📊 Built-in dashboard and analytics
- 🔄 Automatic backups
- 📈 Scales automatically

**Setup:** See `SUPABASE_SETUP.md` for complete instructions.

**Quick start:**
1. Create a Supabase project at https://supabase.com
2. Run `supabase/schema.sql` in SQL Editor
3. Add your keys to `.env.local`
4. You're done! ✅

## Deployment

This project is optimized for deployment on:
- **Vercel** (recommended) - Add env vars in project settings
- **Netlify** - Add env vars in build settings
- **Azure Static Web Apps** - Configure in portal

Make sure to configure your deployment region to EU/EEA for GDPR compliance.

### Environment Variables

Required for production:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key

Optional:
- Email service credentials (e.g., Resend, Mailgun)
- CAPTCHA keys (e.g., Cloudflare Turnstile)

## Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Zod](https://zod.dev/) - Schema validation
- [Google Fonts](https://fonts.google.com/) - Typography

## PRD Reference

This implementation follows the detailed PRD specifications for:
- Information architecture
- Visual design tokens
- Accessibility requirements
- GDPR compliance
- Form validation rules
- Success metrics

See `nordic_pilates_landing_page_prd_waitlist_mvp.md` for complete requirements.

## License

© 2025 Nordic Pilates. All rights reserved.
