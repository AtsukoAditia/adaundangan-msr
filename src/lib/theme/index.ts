/**
 * Theme system — public API barrel export.
 *
 * Re-exports all types, utilities, registry, and token helpers so consumers
 * can import everything from `@/lib/theme` (or `src/lib/theme`).
 */

// --- Types ---------------------------------------------------------------
export type {
  Theme,
  ThemeColors,
  ThemeTypography,
  ThemeLayout,
  ThemeStyle,
  CoverVariant,
  DividerVariant,
  CardStyle,
  AnimationIntensity,
} from './types';

// --- Tokens / CSS generation ---------------------------------------------
export { generateCSSVars, cssVarsToString } from './tokens';

// --- Registry ------------------------------------------------------------
export {
  templateRegistry,
  getThemeByTemplate,
  getAvailableThemes,
} from './registry';

// --- Utilities -----------------------------------------------------------
export {
  getThemeColors,
  getThemeFonts,
  mergeThemeWithDefaults,
} from './utils';
