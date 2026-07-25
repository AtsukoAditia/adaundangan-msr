/**
 * Modern theme — Navy & Rose Gold
 *
 * A sophisticated palette pairing deep navy with soft rose gold accents.
 * Ideal for contemporary, chic invitation designs.
 */

import type { Theme } from '../types';

const modern: Theme = {
  id: 'modern',
  name: 'Modern',
  description: 'Navy & rose gold — contemporary chic.',
  preview: '/images/templates/modern.svg',
  colors: {
    primary: '#1E3A5F',
    secondary: '#E8B4B8',
    accent: '#F8F9FA',
    background: '#FFFFFF',
    text: '#1A1A1A',
    muted: '#6B7280',
  },
  typography: {
    heading: 'Montserrat',
    body: 'Open Sans',
  },
  layout: {
    borderRadius: 'rounded-lg',
    shadow: 'shadow-lg',
    spacing: 'normal',
  },
  style: {
    coverVariant: 'geometric',
    dividerVariant: 'dots',
    cardStyle: 'elevated',
    animationIntensity: 'rich',
  },
};

export default modern;
