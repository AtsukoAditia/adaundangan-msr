/**
 * Elegant theme — Burgundy & Gold
 *
 * A refined, luxurious palette built around deep burgundy and gold accents.
 * Ideal for formal weddings and classic invitation designs.
 */

import type { Theme } from '../types';

const elegant: Theme = {
  id: 'elegant',
  name: 'Elegant',
  description: 'Burgundy & gold — refined luxury for classic weddings.',
  preview: '/images/templates/elegant.svg',
  colors: {
    primary: '#7B1D2A',
    secondary: '#D4AF37',
    accent: '#FFFDF7',
    background: '#FFFFFF',
    text: '#1A1A1A',
    muted: '#6B7280',
  },
  typography: {
    heading: 'Playfair Display',
    body: 'Inter',
    script: 'Great Vibes',
  },
  layout: {
    borderRadius: 'rounded-2xl',
    shadow: 'shadow-lg',
    spacing: 'normal',
  },
  style: {
    coverVariant: 'floral',
    dividerVariant: 'ornament',
    cardStyle: 'glass',
    animationIntensity: 'moderate',
  },
};

export default elegant;
