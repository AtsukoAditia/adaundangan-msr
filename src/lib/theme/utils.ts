/**
 * Utility helpers for working with {@link Theme} objects.
 *
 * Provides convenient accessors for common theme sub-sections and a
 * deep-merge helper that fills in missing values from the default theme.
 */

import type {
  Theme,
  ThemeColors,
  ThemeTypography,
} from './types';

// ---------------------------------------------------------------------------
// Default theme (used as the merge base)
// ---------------------------------------------------------------------------

/** Sensible default theme values — mirrors the "elegant" theme. */
const DEFAULT_THEME: Theme = {
  id: 'elegant',
  name: 'Elegant',
  description: 'A timeless, refined design with gold accents and serif typography.',
  preview: '/themes/elegant/preview.png',
  colors: {
    primary: '#b08d57',
    secondary: '#d4c5a9',
    accent: '#8b7355',
    background: '#faf8f5',
    text: '#2c2c2c',
    muted: '#8a8a8a',
  },
  typography: {
    heading: '"Playfair Display", Georgia, serif',
    body: '"Lato", "Helvetica Neue", Arial, sans-serif',
    script: '"Great Vibes", cursive',
  },
  layout: {
    borderRadius: '12px',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    spacing: '1rem',
  },
  style: {
    coverVariant: 'floral',
    dividerVariant: 'ornament',
    cardStyle: 'elevated',
    animationIntensity: 'moderate',
  },
};

// ---------------------------------------------------------------------------
// Accessors
// ---------------------------------------------------------------------------

/**
 * Extract the colour palette from a theme.
 *
 * @param theme - The theme to read from.
 * @returns The {@link ThemeColors} object.
 */
export function getThemeColors(theme: Theme): ThemeColors {
  return { ...theme.colors };
}

/**
 * Extract the typography configuration from a theme.
 *
 * @param theme - The theme to read from.
 * @returns The {@link ThemeTypography} object.
 */
export function getThemeFonts(theme: Theme): ThemeTypography {
  return { ...theme.typography };
}

// ---------------------------------------------------------------------------
// Merge helper
// ---------------------------------------------------------------------------

/**
 * Deep-merge a partial theme configuration with the built-in defaults.
 *
 * Any field omitted from `partial` falls back to the default "elegant"
 * theme value. Nested objects (colors, typography, layout, style) are
 * merged one level deep so you can override individual tokens without
 * replacing the entire sub-object.
 *
 * @param partial - A partial (or complete) theme override.
 * @returns A fully-populated {@link Theme} object.
 *
 * @example
 * ```ts
 * const custom = mergeThemeWithDefaults({
 *   id: 'custom',
 *   name: 'Custom',
 *   colors: { primary: '#ff6600' },
 * });
 * // custom.colors.secondary === default secondary, etc.
 * ```
 */
export function mergeThemeWithDefaults(partial: Partial<Theme>): Theme {
  return {
    id: partial.id ?? DEFAULT_THEME.id,
    name: partial.name ?? DEFAULT_THEME.name,
    description: partial.description ?? DEFAULT_THEME.description,
    preview: partial.preview ?? DEFAULT_THEME.preview,
    colors: { ...DEFAULT_THEME.colors, ...partial.colors },
    typography: { ...DEFAULT_THEME.typography, ...partial.typography },
    layout: { ...DEFAULT_THEME.layout, ...partial.layout },
    style: { ...DEFAULT_THEME.style, ...partial.style },
  };
}
