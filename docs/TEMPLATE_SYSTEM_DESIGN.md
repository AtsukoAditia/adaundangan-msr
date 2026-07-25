# Template System Design — AdaUndangan

## Overview
Sistem multi-template yang memungkinkan customer memilih dari 5 desain berbeda. Setiap template memiliki:
- Color scheme (primary, secondary, accent, background)
- Typography (heading font, body font)
- Layout style (spacing, border radius, shadows)
- Animation preferences
- Section variants (cover, divider, decorations)

## Current Architecture Issues
- Components hardcoded dengan burgundy/gold/ivory
- Tidak ada theme abstraction layer
- `template` field di InvitationConfig tidak digunakan
- Semua section components langsung pakai Tailwind classes

## Required Modules

### 1. Theme System (`src/lib/theme/`)
**Purpose**: Define theme tokens dan abstraction layer

**Files**:
```
src/lib/theme/
├── types.ts              # Theme interface definitions
├── registry.ts           # Template registry (map name → theme)
├── tokens.ts             # Base design tokens
└── utils.ts              # Theme helper functions
```

**Key Interfaces**:
```typescript
interface ThemeColors {
  primary: string;        // e.g. "#7B1D2A" (burgundy)
  secondary: string;      // e.g. "#D4AF37" (gold)
  accent: string;         // e.g. "#FFFDF7" (ivory)
  background: string;     // e.g. "#FFFFFF"
  text: string;           // e.g. "#1A1A1A"
  muted: string;          // e.g. "#6B7280"
}

interface ThemeTypography {
  heading: string;        // e.g. "Playfair Display"
  body: string;           // e.g. "Inter"
  script?: string;        // e.g. "Great Vibes" (optional)
}

interface ThemeLayout {
  borderRadius: string;   // e.g. "rounded-lg" | "rounded-2xl"
  shadow: string;         // e.g. "shadow-sm" | "shadow-lg"
  spacing: "compact" | "normal" | "spacious";
}

interface ThemeStyle {
  coverVariant: "elegant" | "minimal" | "floral" | "modern" | "rustic";
  dividerVariant: "heart" | "floral" | "wave" | "dots" | "line";
  cardStyle: "glass" | "solid" | "bordered" | "elevated";
  animationIntensity: "subtle" | "normal" | "dramatic";
}

interface Theme {
  id: string;
  name: string;
  description: string;
  preview: string;        // thumbnail path
  colors: ThemeColors;
  typography: ThemeTypography;
  layout: ThemeLayout;
  style: ThemeStyle;
}
```

### 2. Template Definitions (`src/lib/theme/templates/`)
**Purpose**: Define 5 template themes

**Files**:
```
src/lib/theme/templates/
├── elegant.ts            # Burgundy + Gold (existing)
├── minimal.ts            # Black + White
├── floral.ts             # Sage Green + Cream
├── modern.ts             # Navy + Rose Gold
└── rustic.ts             # Terracotta + Beige
```

**Template Specs**:

#### 1. Elegant (Burgundy + Gold)
- **Colors**: `#7B1D2A` (burgundy), `#D4AF37` (gold), `#FFFDF7` (ivory)
- **Typography**: Playfair Display + Inter
- **Style**: Glass cards, shimmer effects, floating particles
- **Vibe**: Luxurious, traditional, premium

#### 2. Minimal (Black + White)
- **Colors**: `#000000` (black), `#FFFFFF` (white), `#6B7280` (gray)
- **Typography**: Inter + Inter
- **Style**: Clean lines, minimal borders, subtle shadows
- **Vibe**: Modern, clean, sophisticated

#### 3. Floral (Sage Green + Cream)
- **Colors**: `#6B8E6F` (sage), `#F5F0E8` (cream), `#D4B896` (tan)
- **Typography**: Cormorant Garamond + Lato
- **Style**: Floral dividers, soft shadows, organic shapes
- **Vibe**: Natural, romantic, garden wedding

#### 4. Modern (Navy + Rose Gold)
- **Colors**: `#1E3A5F` (navy), `#E8B4B8` (rose gold), `#F8F9FA` (light gray)
- **Typography**: Montserrat + Open Sans
- **Style**: Geometric patterns, gradient accents, bold typography
- **Vibe**: Contemporary, trendy, urban

#### 5. Rustic (Terracotta + Beige)
- **Colors**: `#C77D5A` (terracotta), `#E8DCC4` (beige), `#5C4033` (brown)
- **Typography**: Playfair Display + Source Sans Pro
- **Style**: Wood textures, hand-drawn elements, warm tones
- **Vibe**: Cozy, vintage, outdoor wedding

### 3. Theme Context (`src/components/providers/`)
**Purpose**: Provide theme to all components via React Context

**Files**:
```
src/components/providers/
└── ThemeProvider.tsx     # Context provider + hook
```

**Implementation**:
```typescript
interface ThemeContextValue {
  theme: Theme;
  cssVars: Record<string, string>; // CSS custom properties
}

const ThemeContext = createContext<ThemeContextValue>();

export function ThemeProvider({ theme, children }) {
  const cssVars = generateCSSVars(theme);
  return (
    <ThemeContext.Provider value={{ theme, cssVars }}>
      <div style={cssVars}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

### 4. CSS Variables System (`app/globals.css`)
**Purpose**: Dynamic theming via CSS custom properties

**Changes**:
```css
:root {
  --color-primary: #7B1D2A;
  --color-secondary: #D4AF37;
  --color-accent: #FFFDF7;
  --color-background: #FFFFFF;
  --color-text: #1A1A1A;
  --color-muted: #6B7280;
  
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  
  --radius: 0.5rem;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

/* Update components to use CSS vars */
.section-title {
  color: var(--color-primary);
  font-family: var(--font-heading);
}

.card {
  background: var(--color-accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
```

### 5. Component Refactoring
**Purpose**: Replace hardcoded colors with theme tokens

**Affected Components** (19 files):
```
src/components/invitation/
├── BackToTop.tsx         # Use --color-primary
├── CalendarButtons.tsx   # Use --color-primary, --color-secondary
├── ClosingSection.tsx    # Use --color-primary, --color-background
├── Countdown.tsx         # Use --color-primary, --color-secondary
├── CoupleSection.tsx     # Use --color-primary, --color-accent
├── EventSection.tsx      # Use --color-primary, --color-background
├── GallerySection.tsx    # Use --color-background
├── GiftSection.tsx       # Use --color-primary, --color-secondary
├── GuestBook.tsx         # Use --color-background, --color-text
├── HeroSection.tsx       # Use --color-primary, --color-secondary
├── InvitationCover.tsx   # Use --color-primary, --color-secondary
├── LocationSection.tsx   # Use --color-primary, --color-background
├── MusicController.tsx   # Use --color-primary
├── QuoteSection.tsx      # Use --color-primary, --color-secondary
├── RSVPForm.tsx          # Use --color-primary, --color-secondary
├── ScrollProgress.tsx    # Use --color-primary, --color-secondary
├── SectionDivider.tsx    # Use --color-secondary
├── ShareButtons.tsx      # Use --color-primary, --color-secondary
└── StorySection.tsx      # Use --color-primary, --color-background
```

**Refactoring Pattern**:
```typescript
// Before
<div className="bg-burgundy text-gold">

// After (CSS vars)
<div style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)' }}>

// Or with Tailwind arbitrary values
<div className="bg-[var(--color-primary)] text-[var(--color-secondary)]">
```

### 6. Template Selector UI (`src/components/landing/`)
**Purpose**: Allow customers to preview and select templates

**Files**:
```
src/components/landing/
└── TemplateSelector.tsx  # Grid of 5 template cards
```

**Features**:
- Grid layout (2 columns mobile, 5 columns desktop)
- Template thumbnail preview
- Hover effect with template name + description
- Click to preview in new tab
- "Select Template" button

### 7. Template Preview Routes (`app/template/`)
**Purpose**: Demo pages for each template

**Files**:
```
app/template/
├── [template]/
│   └── page.tsx          # Dynamic template preview
└── page.tsx              # Template gallery
```

**Routes**:
- `/template` → Gallery of all 5 templates
- `/template/elegant` → Preview elegant template
- `/template/minimal` → Preview minimal template
- `/template/floral` → Preview floral template
- `/template/modern` → Preview modern template
- `/template/rustic` → Preview rustic template

### 8. Template Registry Update (`src/data/invitations/`)
**Purpose**: Map template name to theme

**Changes to `index.ts`**:
```typescript
import { elegantTheme } from '@/lib/theme/templates/elegant';
import { minimalTheme } from '@/lib/theme/templates/minimal';
// ... import all themes

export const templateRegistry: Record<string, Theme> = {
  elegant: elegantTheme,
  minimal: minimalTheme,
  floral: floralTheme,
  modern: modernTheme,
  rustic: rusticTheme,
};

export function getThemeByTemplate(template: string): Theme {
  return templateRegistry[template] ?? elegantTheme;
}
```

### 9. InvitationPage Integration
**Purpose**: Load theme based on invitation config

**Changes to `app/[slug]/InvitationPage.tsx`**:
```typescript
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { getThemeByTemplate } from '@/data/invitations';

export default function InvitationPage({ config }) {
  const theme = getThemeByTemplate(config.template ?? 'elegant');
  
  return (
    <ThemeProvider theme={theme}>
      {/* All components now have access to theme */}
      <InvitationCover config={config} />
      <HeroSection config={config} />
      {/* ... */}
    </ThemeProvider>
  );
}
```

### 10. Demo Data Updates
**Purpose**: Create demo invitations for each template

**Files**:
```
src/data/invitations/
├── demo-elegant.ts       # Burgundy + Gold
├── demo-minimal.ts       # Black + White
├── demo-floral.ts        # Sage Green + Cream
├── demo-modern.ts        # Navy + Rose Gold
└── demo-rustic.ts        # Terracotta + Beige
```

**Update `index.ts`**:
```typescript
const invitations: Record<string, InvitationConfig> = {
  'demo-elegant': demoElegant,
  'demo-minimal': demoMinimal,
  'demo-floral': demoFloral,
  'demo-modern': demoModern,
  'demo-rustic': demoRustic,
};
```

## Implementation Order

### Phase 1: Foundation (2-3 days)
1. Create `src/lib/theme/types.ts` — Define all interfaces
2. Create `src/lib/theme/tokens.ts` — Base design tokens
3. Create `src/lib/theme/registry.ts` — Template registry
4. Create `src/lib/theme/utils.ts` — Helper functions
5. Update `app/globals.css` — Add CSS variables system
6. Create `src/components/providers/ThemeProvider.tsx` — Context provider

### Phase 2: Template Definitions (1-2 days)
7. Create `src/lib/theme/templates/elegant.ts`
8. Create `src/lib/theme/templates/minimal.ts`
9. Create `src/lib/theme/templates/floral.ts`
10. Create `src/lib/theme/templates/modern.ts`
11. Create `src/lib/theme/templates/rustic.ts`

### Phase 3: Component Refactoring (3-4 days)
12. Refactor `InvitationCover.tsx` — Use theme tokens
13. Refactor `HeroSection.tsx` — Use theme tokens
14. Refactor `Countdown.tsx` — Use theme tokens
15. Refactor `CoupleSection.tsx` — Use theme tokens
16. Refactor `EventSection.tsx` — Use theme tokens
17. Refactor `StorySection.tsx` — Use theme tokens
18. Refactor `GallerySection.tsx` — Use theme tokens
19. Refactor `RSVPForm.tsx` — Use theme tokens
20. Refactor `GuestBook.tsx` — Use theme tokens
21. Refactor `QuoteSection.tsx` — Use theme tokens
22. Refactor `GiftSection.tsx` — Use theme tokens
23. Refactor `LocationSection.tsx` — Use theme tokens
24. Refactor `ClosingSection.tsx` — Use theme tokens
25. Refactor `SectionDivider.tsx` — Use theme tokens
26. Refactor `ScrollProgress.tsx` — Use theme tokens
27. Refactor `ShareButtons.tsx` — Use theme tokens
28. Refactor `BackToTop.tsx` — Use theme tokens
29. Refactor `MusicController.tsx` — Use theme tokens
30. Refactor `CalendarButtons.tsx` — Use theme tokens

### Phase 4: Integration (1 day)
31. Update `app/[slug]/InvitationPage.tsx` — Wrap with ThemeProvider
32. Update `src/data/invitations/index.ts` — Add template registry
33. Create demo data files (5 files)
34. Update `src/data/invitations/index.ts` — Register all demos

### Phase 5: UI (1-2 days)
35. Create `src/components/landing/TemplateSelector.tsx`
36. Create `app/template/page.tsx` — Template gallery
37. Create `app/template/[template]/page.tsx` — Template preview
38. Update landing page to include template selector

### Phase 6: Testing (1 day)
39. Add unit tests for theme system
40. Add E2E tests for template switching
41. Visual regression testing (optional)

**Total Estimated Time**: 8-12 days

## Technical Considerations

### CSS Variables vs Tailwind Classes
**Recommendation**: Use CSS variables with Tailwind arbitrary values
```typescript
// ✅ Good
<div className="bg-[var(--color-primary)]">

// ❌ Avoid inline styles for simple cases
<div style={{ background: 'var(--color-primary)' }}>
```

### Font Loading
- Load all fonts in `app/layout.tsx`
- Use `next/font/google` for optimization
- Define font families in theme config

### Animation Intensity
- `subtle`: Reduce motion duration, fewer particles
- `normal`: Current animation levels
- `dramatic`: Enhanced effects, more particles

### Responsive Design
- Theme tokens should work across all breakpoints
- Test each template on mobile, tablet, desktop

### Performance
- Lazy load template-specific assets
- Cache theme context to avoid re-renders
- Use CSS variables (no runtime JS for theming)

## Testing Strategy

### Unit Tests
- Theme registry functions
- CSS variable generation
- Theme context provider

### E2E Tests
- Template selector navigation
- Template preview pages
- Theme switching

### Visual Tests
- Screenshot comparison for each template
- Responsive breakpoint testing
- Dark mode compatibility (future)

## Future Enhancements

### Phase 7: Custom Templates (Post-MVP)
- Admin panel for creating custom themes
- Template builder UI
- Export/import theme configs

### Phase 8: Advanced Features
- Dark mode support
- Seasonal templates (Christmas, Ramadan, etc.)
- Cultural themes (Javanese, Balinese, Chinese, etc.)
- Template marketplace

## Success Criteria
- [ ] 5 templates fully implemented
- [ ] All components use theme tokens
- [ ] Template selector UI working
- [ ] Demo pages for each template
- [ ] All tests passing
- [ ] No visual regressions
- [ ] Performance maintained (LCP < 2.5s)

## Risks & Mitigations

### Risk 1: Component Refactoring Complexity
**Mitigation**: Refactor one component at a time, test after each

### Risk 2: CSS Variable Browser Support
**Mitigation**: CSS variables supported in 97%+ browsers (caniuse.com)

### Risk 3: Font Loading Performance
**Mitigation**: Use `next/font/google`, preload critical fonts

### Risk 4: Template Inconsistencies
**Mitigation**: Create design system documentation, visual QA checklist

## Conclusion
This template system provides a solid foundation for multi-template support. The modular approach allows for easy addition of new templates in the future. Estimated 8-12 days for full implementation with testing.
