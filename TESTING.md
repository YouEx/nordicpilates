# A/B/C/D Testing Variants

Dette er din test-struktur til at køre forskellige design-varianter.

## URLs

- **Variant A (Baseline):** https://nordicpilates.dk/a
- **Variant B:** https://nordicpilates.dk/b  
- **Variant C:** https://nordicpilates.dk/c
- **Variant D:** https://nordicpilates.dk/d

## Struktur

Hver variant har sin egen side i:
- `/app/a/page.tsx` - Variant A (nuværende design som baseline)
- `/app/b/page.tsx` - Variant B
- `/app/c/page.tsx` - Variant C  
- `/app/d/page.tsx` - Variant D

## Sådan redigerer du en variant

1. Åbn den variant du vil ændre (f.eks. `/app/b/page.tsx`)
2. Lav dine design-ændringer
3. Gem og deploy
4. Test på https://nordicpilates.dk/b

## Variantlabels

Hver variant har et farvet label i øverste venstre hjørne til test-formål:
- Variant A: Coral (Baseline)
- Variant B: Blå
- Variant C: Grøn
- Variant D: Lilla

**Husk at fjerne disse labels før produktionslancering!**

## Test-idéer

Her er nogle ting du kan teste:

### Hero Section
- Forskellige headlines
- CTA button farver/tekst
- Logo placement/størrelse
- Background overlay opacity

### Waitlist Quiz
- Placering (tidligt vs. sent på siden)
- Antal trin (3 vs. 5)
- Design (inline vs. modal)

### Social Proof
- Placering af testimonials
- Antal testimonials vist
- Med/uden billeder

### Pricing
- Pricing position (tidligt vs. sent)
- Fremhævning af early-bird tilbud
- Enkelt vs. flere prisniveauer

### Call-to-Actions
- Antal CTAs
- CTA tekst ("Tilmeld venteliste" vs. "Kom med fra start")
- Button farver og størrelse

## Tracking

For at tracke conversions, tilføj en `variant` parameter til din Supabase submission:

\`\`\`typescript
// I WaitlistQuiz.tsx
const variant = window.location.pathname.split('/')[1] || 'main'
// Send med i din submission
\`\`\`

Så kan du se hvilken variant der konverterer bedst i din database.
