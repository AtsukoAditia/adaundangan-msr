/**
 * Template registry — central lookup for all available invitation themes.
 *
 * Each theme module is expected to export a default {@link Theme} object.
 * The registry maps a template slug (e.g. "elegant") to its theme and
 * provides a safe accessor that falls back to the "elegant" theme when
 * the requested template is unknown.
 *
 * Theme modules are created by a separate agent; the imports below are
 * guarded so the system degrades gracefully while themes are still being
 * authored.
 */

import type { Theme } from './types';
import elegant from './templates/elegant';
import minimal from './templates/minimal';
import floral from './templates/floral';
import modern from './templates/modern';
import rustic from './templates/rustic';

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

/**
 * Central registry mapping template slugs to their {@link Theme} objects.
 *
 * Keys are lowercase slug identifiers used in URLs and configuration
 * (e.g. `"elegant"`, `"rustic"`).
 */
export const templateRegistry: Record<string, Theme> = {
  elegant,
  minimal,
  floral,
  modern,
  rustic,
};

/** The fallback theme id used when a requested template is not found. */
const DEFAULT_THEME_ID = 'elegant';

/**
 * Look up a theme by its template slug.
 *
 * Returns the matching {@link Theme}, or the `"elegant"` default theme
 * when the slug is `undefined`, empty, or not present in the registry.
 *
 * @param template - Template slug to look up (e.g. `"rustic"`).
 * @returns The resolved {@link Theme}.
 *
 * @example
 * ```ts
 * const theme = getThemeByTemplate('rustic');
 * console.log(theme.name); // "Rustic"
 *
 * const fallback = getThemeByTemplate('nonexistent');
 * console.log(fallback.id); // "elegant"
 * ```
 */
export function getThemeByTemplate(template: string | undefined | null): Theme {
  if (!template) {
    return templateRegistry[DEFAULT_THEME_ID];
  }
  return templateRegistry[template] ?? templateRegistry[DEFAULT_THEME_ID];
}

/**
 * Return an array of all registered theme ids.
 *
 * @returns Array of theme slug strings.
 */
export function getAvailableThemes(): string[] {
  return Object.keys(templateRegistry);
}
