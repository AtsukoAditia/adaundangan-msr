/**
 * Theme type definitions for AdaUndangan multi-template system.
 *
 * Each theme describes the full visual identity for an invitation template,
 * including colours, typography, layout primitives, and style variants.
 */

// ---------------------------------------------------------------------------
// Colour palette
// ---------------------------------------------------------------------------

/** Core colour tokens shared by every theme. */
export interface ThemeColors {
  /** Primary brand / accent colour (CTAs, highlights). */
  primary: string;
  /** Secondary supporting colour. */
  secondary: string;
  /** Tertiary accent used sparingly for emphasis. */
  accent: string;
  /** Page / card background. */
  background: string;
  /** Default body-text colour. */
  text: string;
  /** Muted / placeholder text colour. */
  muted: string;
}

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

/** Typography configuration for a theme. */
export interface ThemeTypography {
  /** Font-family stack for headings (h1-h6). */
  heading: string;
  /** Font-family stack for body copy. */
  body: string;
  /** Optional decorative / script font for special call-outs. */
  script?: string;
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

/** Layout-level design tokens. */
export interface ThemeLayout {
  /** Global border-radius (e.g. "12px" or "0.75rem"). */
  borderRadius: string;
  /** Default box-shadow value. */
  shadow: string;
  /** Base spacing unit used for padding / margin calculations. */
  spacing: string;
}

// ---------------------------------------------------------------------------
// Style variants
// ---------------------------------------------------------------------------

/** Visual style variant options for cover images. */
export type CoverVariant = 'floral' | 'geometric' | 'minimal' | 'watercolor' | 'abstract';

/** Visual style variant options for section dividers. */
export type DividerVariant = 'ornament' | 'line' | 'floral' | 'dots' | 'none';

/** Card rendering style. */
export type CardStyle = 'elevated' | 'flat' | 'outlined' | 'glass';

/** Animation intensity level. */
export type AnimationIntensity = 'none' | 'subtle' | 'moderate' | 'rich';

/** Style-level configuration controlling component variants. */
export interface ThemeStyle {
  /** Cover section visual variant. */
  coverVariant: CoverVariant;
  /** Section divider visual variant. */
  dividerVariant: DividerVariant;
  /** Card component rendering style. */
  cardStyle: CardStyle;
  /** Global animation intensity. */
  animationIntensity: AnimationIntensity;
}

// ---------------------------------------------------------------------------
// Root theme
// ---------------------------------------------------------------------------

/** Complete theme descriptor for an invitation template. */
export interface Theme {
  /** Unique machine-readable identifier (e.g. "elegant", "rustic"). */
  id: string;
  /** Human-readable display name. */
  name: string;
  /** Short description of the theme's look & feel. */
  description: string;
  /** Path or URL to a preview thumbnail image. */
  preview: string;
  /** Colour palette. */
  colors: ThemeColors;
  /** Typography configuration. */
  typography: ThemeTypography;
  /** Layout tokens. */
  layout: ThemeLayout;
  /** Style variant configuration. */
  style: ThemeStyle;
}
