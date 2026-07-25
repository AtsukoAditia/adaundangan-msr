/**
 * Base design tokens and CSS custom-property generation helpers.
 *
 * `generateCSSVars` converts a {@link Theme} object into a flat record of
 * CSS custom properties that can be injected into `:root` or scoped to a
 * specific DOM element.
 */

import type { Theme } from './types';

// ---------------------------------------------------------------------------
// CSS variable generation
// ---------------------------------------------------------------------------

/**
 * Convert a {@link Theme} into a flat map of CSS custom-property
 * name → value pairs.
 *
 * Generated variables follow the naming convention:
 * - `--color-*` for colour tokens
 * - `--font-*` for typography tokens
 * - `--radius`, `--shadow`, `--spacing` for layout tokens
 *
 * @param theme - The theme configuration to convert.
 * @returns A record of CSS custom property names to their values.
 *
 * @example
 * ```ts
 * const vars = generateCSSVars(myTheme);
 * // { '--color-primary': '#b08d57', '--font-heading': '"Playfair Display", serif', … }
 * ```
 */
export function generateCSSVars(theme: Theme): Record<string, string> {
  const vars: Record<string, string> = {};

  // --- Colours -----------------------------------------------------------
  vars['--color-primary'] = theme.colors.primary;
  vars['--color-secondary'] = theme.colors.secondary;
  vars['--color-accent'] = theme.colors.accent;
  vars['--color-background'] = theme.colors.background;
  vars['--color-text'] = theme.colors.text;
  vars['--color-muted'] = theme.colors.muted;

  // --- Typography --------------------------------------------------------
  vars['--font-heading'] = theme.typography.heading;
  vars['--font-body'] = theme.typography.body;
  if (theme.typography.script) {
    vars['--font-script'] = theme.typography.script;
  }

  // --- Layout ------------------------------------------------------------
  vars['--radius'] = theme.layout.borderRadius;
  vars['--shadow'] = theme.layout.shadow;
  vars['--spacing'] = theme.layout.spacing;

  return vars;
}

/**
 * Serialize a CSS variable record into a CSS declaration block string
 * suitable for embedding inside a selector.
 *
 * @param vars - CSS variable map produced by {@link generateCSSVars}.
 * @returns A CSS string fragment (without the surrounding selector braces).
 *
 * @example
 * ```ts
 * const css = cssVarsToString(generateCSSVars(myTheme));
 * // "--color-primary: #b08d57;\n--font-heading: ..."
 * ```
 */
export function cssVarsToString(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([prop, value]) => `${prop}: ${value};`)
    .join('\n  ');
}
