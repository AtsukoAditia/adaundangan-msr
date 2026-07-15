// Theme color palettes with RGB values for Tailwind CSS variable injection

export const THEMES = {
  elegant: {
    name: "Elegant",
    css: `
      --theme-primary-rgb: 123, 29, 42;
      --theme-primary-50-rgb: 249, 233, 235;
      --theme-primary-100-rgb: 240, 197, 203;
      --theme-primary-200-rgb: 231, 154, 164;
      --theme-primary-300-rgb: 217, 110, 124;
      --theme-primary-400-rgb: 204, 74, 90;
      --theme-primary-500-rgb: 123, 29, 42;
      --theme-primary-600-rgb: 106, 25, 36;
      --theme-primary-700-rgb: 89, 20, 30;
      --theme-primary-800-rgb: 72, 15, 24;
      --theme-primary-900-rgb: 55, 11, 18;
      --theme-accent-rgb: 212, 175, 55;
      --theme-accent-50-rgb: 253, 248, 232;
      --theme-accent-100-rgb: 249, 238, 191;
      --theme-accent-200-rgb: 245, 226, 147;
      --theme-accent-300-rgb: 240, 213, 103;
      --theme-accent-400-rgb: 235, 201, 62;
      --theme-accent-500-rgb: 212, 175, 55;
      --theme-accent-600-rgb: 184, 149, 47;
      --theme-accent-700-rgb: 155, 123, 39;
      --theme-accent-800-rgb: 127, 98, 31;
      --theme-accent-900-rgb: 98, 73, 23;
      --theme-bg-rgb: 255, 253, 247;
      --theme-bg-50-rgb: 255, 253, 247;
      --theme-bg-100-rgb: 254, 251, 238;
      --theme-bg-200-rgb: 253, 247, 224;
      --theme-bg-300-rgb: 252, 243, 210;
      --theme-bg-400-rgb: 251, 239, 191;
      --theme-bg-500-rgb: 249, 232, 160;
    `,
  },
  "modern-minimalist": {
    name: "Modern Minimalist",
    css: `
      --theme-primary-rgb: 26, 26, 46;
      --theme-primary-50-rgb: 240, 240, 245;
      --theme-primary-100-rgb: 224, 224, 234;
      --theme-primary-200-rgb: 192, 192, 213;
      --theme-primary-300-rgb: 160, 160, 192;
      --theme-primary-400-rgb: 128, 128, 171;
      --theme-primary-500-rgb: 26, 26, 46;
      --theme-primary-600-rgb: 21, 21, 42;
      --theme-primary-700-rgb: 16, 16, 38;
      --theme-primary-800-rgb: 11, 11, 34;
      --theme-primary-900-rgb: 6, 6, 30;
      --theme-accent-rgb: 233, 69, 96;
      --theme-accent-50-rgb: 253, 232, 235;
      --theme-accent-100-rgb: 250, 208, 215;
      --theme-accent-200-rgb: 247, 160, 175;
      --theme-accent-300-rgb: 244, 112, 135;
      --theme-accent-400-rgb: 241, 64, 96;
      --theme-accent-500-rgb: 233, 69, 96;
      --theme-accent-600-rgb: 209, 61, 85;
      --theme-accent-700-rgb: 185, 53, 74;
      --theme-accent-800-rgb: 161, 45, 63;
      --theme-accent-900-rgb: 137, 37, 52;
      --theme-bg-rgb: 250, 250, 250;
      --theme-bg-50-rgb: 250, 250, 250;
      --theme-bg-100-rgb: 245, 245, 245;
      --theme-bg-200-rgb: 239, 239, 239;
      --theme-bg-300-rgb: 232, 232, 232;
      --theme-bg-400-rgb: 208, 208, 208;
      --theme-bg-500-rgb: 184, 184, 184;
    `,
  },
  "romantic-floral": {
    name: "Romantic Floral",
    css: `
      --theme-primary-rgb: 196, 69, 105;
      --theme-primary-50-rgb: 253, 238, 243;
      --theme-primary-100-rgb: 250, 220, 230;
      --theme-primary-200-rgb: 245, 184, 205;
      --theme-primary-300-rgb: 240, 148, 180;
      --theme-primary-400-rgb: 235, 112, 155;
      --theme-primary-500-rgb: 196, 69, 105;
      --theme-primary-600-rgb: 176, 61, 95;
      --theme-primary-700-rgb: 156, 53, 85;
      --theme-primary-800-rgb: 136, 45, 75;
      --theme-primary-900-rgb: 116, 37, 65;
      --theme-accent-rgb: 247, 183, 49;
      --theme-accent-50-rgb: 254, 250, 232;
      --theme-accent-100-rgb: 253, 243, 207;
      --theme-accent-200-rgb: 251, 231, 159;
      --theme-accent-300-rgb: 249, 219, 111;
      --theme-accent-400-rgb: 247, 207, 63;
      --theme-accent-500-rgb: 247, 183, 49;
      --theme-accent-600-rgb: 223, 165, 43;
      --theme-accent-700-rgb: 199, 147, 37;
      --theme-accent-800-rgb: 175, 129, 31;
      --theme-accent-900-rgb: 151, 111, 25;
      --theme-bg-rgb: 255, 245, 247;
      --theme-bg-50-rgb: 255, 245, 247;
      --theme-bg-100-rgb: 255, 238, 240;
      --theme-bg-200-rgb: 255, 221, 226;
      --theme-bg-300-rgb: 255, 204, 212;
      --theme-bg-400-rgb: 255, 187, 198;
      --theme-bg-500-rgb: 255, 154, 184;
    `,
  },
  "luxury-gold": {
    name: "Luxury Gold",
    css: `
      --theme-primary-rgb: 13, 27, 42;
      --theme-primary-50-rgb: 232, 237, 242;
      --theme-primary-100-rgb: 209, 218, 228;
      --theme-primary-200-rgb: 163, 181, 199;
      --theme-primary-300-rgb: 117, 144, 170;
      --theme-primary-400-rgb: 71, 107, 141;
      --theme-primary-500-rgb: 13, 27, 42;
      --theme-primary-600-rgb: 10, 22, 37;
      --theme-primary-700-rgb: 7, 17, 32;
      --theme-primary-800-rgb: 4, 12, 27;
      --theme-primary-900-rgb: 1, 7, 22;
      --theme-accent-rgb: 212, 175, 55;
      --theme-accent-50-rgb: 253, 248, 232;
      --theme-accent-100-rgb: 249, 238, 191;
      --theme-accent-200-rgb: 245, 226, 147;
      --theme-accent-300-rgb: 240, 213, 103;
      --theme-accent-400-rgb: 235, 201, 62;
      --theme-accent-500-rgb: 212, 175, 55;
      --theme-accent-600-rgb: 184, 149, 47;
      --theme-accent-700-rgb: 155, 123, 39;
      --theme-accent-800-rgb: 127, 98, 31;
      --theme-accent-900-rgb: 98, 73, 23;
      --theme-bg-rgb: 13, 27, 42;
      --theme-bg-50-rgb: 26, 45, 64;
      --theme-bg-100-rgb: 35, 53, 69;
      --theme-bg-200-rgb: 45, 63, 79;
      --theme-bg-300-rgb: 55, 71, 89;
      --theme-bg-400-rgb: 65, 80, 99;
      --theme-bg-500-rgb: 75, 88, 109;
    `,
  },
  "rustic-natural": {
    name: "Rustic Natural",
    css: `
      --theme-primary-rgb: 93, 78, 55;
      --theme-primary-50-rgb: 245, 240, 234;
      --theme-primary-100-rgb: 234, 221, 207;
      --theme-primary-200-rgb: 213, 187, 159;
      --theme-primary-300-rgb: 192, 153, 111;
      --theme-primary-400-rgb: 171, 119, 79;
      --theme-primary-500-rgb: 93, 78, 55;
      --theme-primary-600-rgb: 81, 69, 48;
      --theme-primary-700-rgb: 69, 60, 41;
      --theme-primary-800-rgb: 57, 51, 34;
      --theme-primary-900-rgb: 45, 42, 27;
      --theme-accent-rgb: 107, 142, 35;
      --theme-accent-50-rgb: 243, 247, 235;
      --theme-accent-100-rgb: 229, 236, 213;
      --theme-accent-200-rgb: 201, 217, 171;
      --theme-accent-300-rgb: 173, 198, 129;
      --theme-accent-400-rgb: 145, 179, 87;
      --theme-accent-500-rgb: 107, 142, 35;
      --theme-accent-600-rgb: 95, 126, 31;
      --theme-accent-700-rgb: 83, 110, 27;
      --theme-accent-800-rgb: 71, 94, 23;
      --theme-accent-900-rgb: 59, 78, 19;
      --theme-bg-rgb: 245, 240, 232;
      --theme-bg-50-rgb: 245, 240, 232;
      --theme-bg-100-rgb: 237, 231, 220;
      --theme-bg-200-rgb: 224, 214, 198;
      --theme-bg-300-rgb: 211, 197, 176;
      --theme-bg-400-rgb: 198, 180, 154;
      --theme-bg-500-rgb: 185, 163, 132;
    `,
  },
  "bold-contemporary": {
    name: "Bold Contemporary",
    css: `
      --theme-primary-rgb: 29, 53, 87;
      --theme-primary-50-rgb: 238, 241, 245;
      --theme-primary-100-rgb: 221, 227, 235;
      --theme-primary-200-rgb: 187, 199, 215;
      --theme-primary-300-rgb: 153, 171, 195;
      --theme-primary-400-rgb: 119, 143, 175;
      --theme-primary-500-rgb: 29, 53, 87;
      --theme-primary-600-rgb: 26, 47, 78;
      --theme-primary-700-rgb: 23, 41, 69;
      --theme-primary-800-rgb: 20, 35, 60;
      --theme-primary-900-rgb: 17, 29, 51;
      --theme-accent-rgb: 230, 57, 70;
      --theme-accent-50-rgb: 253, 233, 235;
      --theme-accent-100-rgb: 250, 210, 213;
      --theme-accent-200-rgb: 245, 165, 171;
      --theme-accent-300-rgb: 240, 120, 129;
      --theme-accent-400-rgb: 235, 75, 87;
      --theme-accent-500-rgb: 230, 57, 70;
      --theme-accent-600-rgb: 207, 50, 62;
      --theme-accent-700-rgb: 184, 43, 54;
      --theme-accent-800-rgb: 161, 36, 46;
      --theme-accent-900-rgb: 138, 29, 38;
      --theme-bg-rgb: 241, 250, 238;
      --theme-bg-50-rgb: 241, 250, 238;
      --theme-bg-100-rgb: 229, 244, 224;
      --theme-bg-200-rgb: 203, 233, 193;
      --theme-bg-300-rgb: 177, 222, 162;
      --theme-bg-400-rgb: 151, 211, 131;
      --theme-bg-500-rgb: 125, 200, 100;
    `,
  },
} as const;

export type ThemeKey = keyof typeof THEMES;
