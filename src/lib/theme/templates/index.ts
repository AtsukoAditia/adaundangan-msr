/**
 * Template theme registry for AdaUnd.
 *
 * Re-exports all built-in theme definitions and provides a convenience
 * array for iteration (e.g., theme pickers, galleries).
 */

export { default as elegant } from './elegant';
export { default as minimal } from './minimal';
export { default as floral } from './floral';
export { default as modern } from './modern';
export { default as rustic } from './rustic';

import elegant from './elegant';
import minimal from './minimal';
import floral from './floral';
import modern from './modern';
import rustic from './rustic';

import type { Theme } from '../types';

/** All built-in themes, ordered by intended display priority. */
export const templates: Theme[] = [elegant, minimal, floral, modern, rustic];
