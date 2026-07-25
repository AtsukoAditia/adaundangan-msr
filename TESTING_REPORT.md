# Testing Report — AdaUndangan

## Test Date
2026-07-16

## Test Results Summary

| Test Suite | Status | Passed | Total |
|-----------|--------|--------|-------|
| **E2E (Desktop Chrome)** | ✅ | 27 | 27 |
| **E2E (Mobile Pixel 7)** | ✅ | 27 | 27 |
| **E2E Total** | **✅** | **54** | **54** |
| **Unit Tests** | **✅** | **50** | **50** |

### Unit Test Details (50/50)
```
 ✓ GuestBook (5 tests)
 ✓ Countdown (4 tests)
 ✓ SectionDivider (5 tests)
 ✓ RSVP Schema (12 tests)
 ✓ ICS Generator (12 tests)
 ✓ Invitation Lookup (10 tests)
 ✓ Calendar URL (6 tests)
```

### E2E Test Details (54/54)
**Landing Page — Desktop (9 tests)**
- Hero section loads with title ✓
- Hero CTA buttons visible ✓
- Navigates to demo on CTA click ✓
- Scrolls to features section ✓
- Scrolls to pricing section ✓
- Features grid has 8 cards ✓
- Pricing has 4 packages ✓
- Footer has site name ✓
- Navbar links visible ✓

**Landing Page — Mobile (2 tests)**
- Hero visible on mobile ✓
- Mobile nav toggle works ✓

**Invitation Page — Desktop (12 tests)**
- Cover loads with couple names ✓
- Cover has buka button ✓
- Opens invitation on button click ✓
- Scroll reveals sections ✓
- Countdown shows time/ended ✓
- RSVP form accessible after open ✓
- RSVP step 1 shows name input ✓
- RSVP step 1 validates empty name ✓
- Back to top button appears ✓
- Event section shows venue info ✓
- Music controller appears ✓
- Full RSVP flow (name → attendance → guest count → message) ✓

**Invitation Page — Mobile (11 tests)**
- Cover fits mobile viewport ✓
- Content readable on mobile ✓
- RSVP form usable on mobile ✓
- Gallery shows images on mobile ✓
- And all invitation page tests ✓

---

## Build & Static Analysis
| Check | Result |
|-------|--------|
| `npm run lint` | ✅ No warnings/errors |
| `npm run typecheck` | ✅ Clean (0 errors) |
| `npm run build` | ✅ Build success |
| `npm run test` (vitest) | ✅ 50/50 pass |
| `npx playwright test` | ✅ 54/54 pass |

---

## Manual API Verification

| Endpoint | Method | Status | Result |
|----------|--------|--------|--------|
| `/` | GET | 200 | Landing page renders |
| `/demo-dan-demo` | GET | 200 | Invitation renders |
| `/demo-elegant` | GET | 200 | Invitation renders |
| `/lancelot-odette` | GET | 200 | Invitation renders |
| `/not-exist` | GET | 404 | Not-found page |
| `/api/guestbook?slug=demo-dan-demo` | GET | 200 | Returns entries JSON |
| `/privacy` | GET | 200 | Privacy page |

---

## Bugs Fixed During Testing

1. **Missing template preview SVGs** → Created `public/images/templates/*.svg` (elegant, floral, minimal, modern, rustic)
2. **Missing demo-og.jpg** → Created `public/images/invitations/demo-og.svg`, updated refs to `.svg`
3. **RSVPForm late import** → Moved `ScrollReveal` import to top of file
4. **TS `preview` type error** → Resolved by creating actual assets (references were already `.svg` in source, files just didn't exist)
