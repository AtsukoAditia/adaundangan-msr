/**
 * Floral theme — Sage Green & Cream
 *
 * A warm, nature-inspired palette with sage green and cream tones.
 * Ideal for garden weddings and organic invitation designs.
 */

import type { Theme } from '../types';

const floral: Theme = {
  id: 'floral',
  name: 'Floral',
  description: 'Sage green & cream — garden weddings, natural warmth.',
  preview: '/images/templates/floral.svg',
  colors: {
    primary: '#6B8E6F',
    secondary: '#D4B896',
    accent: '#F5F0E8',
    background: '#FFFFFF',
    text: '#2D3B2D',
    muted: '#7C8B7C',
  },
  typography: {
    heading: 'Cormorant Garamond',
    body: 'Lato',
    script: 'Dancing Script',
  },
  layout: {
    borderRadius: 'rounded-xl',
    shadow: 'shadow-md',
    spacing: 'spacious',
  },
  style: {
    coverVariant: 'floral',
    dividerVariant: 'floral',
    cardStyle: 'flat',
    animationIntensity: 'subtle',
  },
};

export default floral;
