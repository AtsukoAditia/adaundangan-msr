/**
 * Minimal theme — Black & White
 *
 * A clean, distraction-free palette using pure black and white.
 * Ideal for modern, typography-forward invitation designs.
 */

import type { Theme } from '../types';

const minimal: Theme = {
  id: 'minimal',
  name: 'Minimal',
  description: 'Black & white — clean lines, no distractions.',
  preview: '/images/templates/minimal.svg',
  colors: {
    primary: '#000000',
    secondary: '#6B7280',
    accent: '#FFFFFF',
    background: '#FFFFFF',
    text: '#000000',
    muted: '#9CA3AF',
  },
  typography: {
    heading: 'Inter',
    body: 'Inter',
  },
  layout: {
    borderRadius: 'rounded-lg',
    shadow: 'shadow-sm',
    spacing: 'compact',
  },
  style: {
    coverVariant: 'minimal',
    dividerVariant: 'line',
    cardStyle: 'outlined',
    animationIntensity: 'subtle',
  },
};

export default minimal;
