# Button Design System - Nordic Pilates

## Oversigt
Alle knapper bruger nu `Button` komponenten fra shadcn/ui med konsistent styling og fuld accessibility.

## Button Variants

### 1. **Primary (Default)**
- **Brug:** Primære call-to-actions (tilmeld venteliste, book nu, bekræft)
- **Styling:** Bronze gradient (`#C4A582` → `#B89968`)
- **Eksempel:**
  ```tsx
  <Button>Tilmeld ventelisten →</Button>
  <Button size="xl">Book nu</Button>
  ```

### 2. **Secondary (Outline)**
- **Brug:** Sekundære actions (læs mere, annuller, back navigation)
- **Styling:** Graphite outline med transparent baggrund
- **Eksempel:**
  ```tsx
  <Button variant="outline">Læs mere</Button>
  <Button variant="outline">Annuller</Button>
  ```

### 3. **Tertiary (Ghost)**
- **Brug:** Mindre vigtige navigation links
- **Styling:** Ingen border, subtle hover effekt
- **Eksempel:**
  ```tsx
  <Button variant="ghost">← Tilbage</Button>
  ```

### 4. **Dark**
- **Brug:** På lyse baggrunde hvor gradient ikke passer
- **Styling:** Solid graphite
- **Eksempel:**
  ```tsx
  <Button variant="dark">Se mere</Button>
  ```

## Størrelser

```tsx
<Button size="sm">Lille knap</Button>      // h-9, px-4
<Button size="default">Normal</Button>      // h-11, px-6 (default)
<Button size="lg">Stor knap</Button>        // h-12, px-8
<Button size="xl">Ekstra stor</Button>      // h-14, px-10
<Button size="icon"><Icon /></Button>       // h-10, w-10
```

## Accessibility Features

### ARIA Labels
Alle knapper har beskrivende aria-labels:
```tsx
<Button aria-label="Tilmeld dig ventelisten for early bird fordele">
  Tilmeld ventelisten
</Button>

<Button 
  aria-label={`Book ${session.type} kl. ${session.time}`}
  disabled={!available}
>
  Book nu
</Button>
```

### ARIA Pressed (Toggle knapper)
Filter knapper bruger `aria-pressed`:
```tsx
<Button 
  aria-pressed={filter === 'Nordic Flow'}
  aria-label="Filtrer Nordic Flow sessions"
>
  Nordic Flow
</Button>
```

### Keyboard Navigation
- ✅ `Tab` - Naviger mellem knapper
- ✅ `Enter/Space` - Aktiver knap
- ✅ `Escape` - Luk dialogs
- ✅ Focus ring ved keyboard navigation (ring-[#C4A582])

### Screen Readers
- ✅ Beskrivende aria-labels på alle interaktive elementer
- ✅ Disabled state kommunikeres korrekt
- ✅ Pressed state for toggle knapper

## Micro-interactions

### Hover
- Scale: `1.02` (subtil forstørrelse)
- Shadow: Øget shadow intensity

### Active/Click
- Scale: `0.98` (subtil compression feedback)

### Focus
- Ring: `2px` solid bronze (`#C4A582`)
- Ring offset: `2px`

### Transitions
- Duration: `200ms`
- Easing: `ease-out` (default)

## Implementering

### Landing Page
- ✅ Hero CTA: Primary (xl)
- ✅ Hero "Læs mere": Outline (xl)
- ✅ "Få plads på ventelisten": Primary (lg, default)
- ✅ Instagram/Footer links: Har hover states

### Booking Page
- ✅ "Tilbage til forside": Ghost (sm)
- ✅ Filter knapper: Primary/Outline (sm, rounded-full)
- ✅ "Book nu": Primary (lg)
- ✅ "Udsolgt": Outline disabled (lg)
- ✅ Dialog "Annuller": Outline
- ✅ Dialog "Bekræft": Primary

## Color Tokens

```js
primary: '#C4A582' (Bronze)
primaryDark: '#B89968'
graphite: '#111214'
white: '#FFFFFF'
focus: '#C4A582'
```

## Best Practices

### ✅ DO:
- Brug primary for hovedhandlinger (max 1-2 per viewport)
- Brug outline for sekundære handlinger
- Tilføj aria-labels til alle knapper
- Brug asChild for link-knapper
- Brug size="xl" for hero CTAs

### ❌ DON'T:
- Brug ikke custom className for farver (brug variants)
- Undgå flere primary knapper tæt på hinanden
- Glem ikke disabled state for unavailable actions
- Brug ikke knapper til navigation uden aria-labels

## Testing Checklist

- [ ] Keyboard navigation virker
- [ ] Focus ring er synlig
- [ ] Hover states fungerer
- [ ] Active states giver feedback
- [ ] Screen reader announcements er klare
- [ ] Disabled knapper er tydeligt markeret
- [ ] Responsive sizing på mobile

## Performance

- ✅ CSS transitions (ikke JS animations)
- ✅ Minimal re-renders med React.memo
- ✅ Optimized shadow-dom operations
