/**
 * Rustic theme — Terracotta & Beige
 *
 * An earthy, warm palette anchored by terracotta and beige tones.
 * Ideal for rustic, bohemian, and outdoor wedding invitation designs.
 */

import type { Theme } from '../types';

const rustic: Theme = {
  id: 'rustic',
  name: 'Rustic',
  description: 'Terracotta & beige — earthy warmth, bohemian charm.',
  preview: '/images/templates/rustic.svg',
  colors: {
    primary: '#C77D5A',
    secondary: '#5C4033',
    accent: '#E8DCC4',
    background: '#FDFBF7',
    text: '#3D2817',
    muted: '#8B7355',
  },
  typography: {
    heading: 'Playfair Display',
    body: 'Source Sans Pro',
  },
  layout: {
    borderRadius: 'rounded-md',
    shadow: 'shadow-md',
    spacing: 'spacious',
  },
  style: {
    coverVariant: 'abstract',
    dividerVariant: 'line',
    cardStyle: 'flat',
    animationIntensity: 'subtle',
  },
};

export default rustic;
