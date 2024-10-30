import type { Config } from 'tailwindcss';
import { withTV } from 'tailwind-variants/transformer';
import plugin from 'tailwindcss/plugin';

const base: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      // === HEADING STYLES ====
      sh1: ['2.5rem', { fontWeight: '700', lineHeight: '1.2' }],
      sh2: ['2rem', { fontWeight: '700', lineHeight: '1.1' }],
      sh3: ['1.5rem', { lineHeight: '1.1' }],
      h1: ['2.5rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.03em' }],
      h2: ['2.125rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em' }],
      h3: ['2rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em' }],
      h4: ['1.5rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.01em' }],
      h5: ['1.25rem', { fontWeight: '800', lineHeight: '1.3', letterSpacing: '-0.01em' }],
      h6: ['1.125rem', { fontWeight: '800', lineHeight: '1.4', letterSpacing: '-0.005em' }],
      // === Subheading STYLES ====
      s1: ['1.5rem', { fontWeight: '600', lineHeight: '1.5', letterSpacing: '-0.015em' }],
      s2: ['1.25rem', { fontWeight: '600', lineHeight: '1.5', letterSpacing: '-0.01em' }],
      s3: ['1.125rem', { fontWeight: '600', lineHeight: '1.4' }],

      // ===== BODY STYLES =====
      b1: ['1rem', { fontWeight: '400', lineHeight: '1.5' }],
      'b1-b': ['1rem', { fontWeight: '500', lineHeight: '1.5' }],
      b2: ['0.875rem', { fontWeight: '400', lineHeight: '1.5' }],
      'b2-b': ['0.875rem', { fontWeight: '500', lineHeight: '1.5' }],
      // ===== CAPTION STYLES =====
      c1: ['0.8125rem', { fontWeight: '400', lineHeight: '1.3' }],
      'c1-b': ['0.8125rem', { fontWeight: '500', lineHeight: '1.3' }],
      c2: ['0.6875rem', { fontWeight: '400', lineHeight: '1.3' }],
      'c2-b': ['0.6875rem', { fontWeight: '500', lineHeight: '1.3' }],

      // === BUTTON STYLES ====
      'bu-l': ['1.125rem', { fontWeight: '700', lineHeight: '1.5' }],
      'bu-m': ['1rem', { fontWeight: '700', lineHeight: '1.5' }],
      'bu-s': ['0.875rem', { fontWeight: '700', lineHeight: '1.5' }],
    },
    fontFamily: {
      primary: 'var(--font-primary)',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      dropShadow: {
        shiny: '0px 0px 31px 0px #F6F1E645,0px 3px 1.8px 0px #FFFFFF inset,0px -1px 1.8px 0px #FFFFFF inset',
      },
      spacing: {
        4.5: '1.125rem', //18px
        5.5: '1.375rem', //22px
        6.5: '1.625rem', //26px
        7.5: '1.875rem', //30px
        12.5: '3.125rem', //50px
        13: '3.25rem', //52px
        15: '3.75rem', //60px
        17: '4.25rem', //68px
        18: '4.5rem', //72px
        19: '4.75rem', //76px
        21: '5.25rem', //84px
        22: '5.5rem', //88px
        23: '5.75rem', //92px
        25: '6.25rem', //100px
        29: '7.25rem', //116px
        29.5: '7.375rem', //118px
        31: '7.75rem', //124px
        35.5: '8.875rem', //142px
        37: '9.25rem', //148px
        49: '12.25rem', //196px
        56: '14rem', // 224px
        'lg-gutter': '1.875rem', //30px
        'md-gutter': '1.25rem', //20px
        'sm-gutter': '1rem', //16px
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '1.25rem',
        md: '1.875rem',
        lg: '3.75rem',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('tailwindcss-animate'),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-primary-gradient': {
          background: `
            linear-gradient(157.41deg, rgba(255, 255, 255, 0.06) -13.64%, rgba(255, 255, 255, 0) 57.52%, rgba(255, 255, 255, 0.06) 128.67%),
            radial-gradient(93.18% 693.95% at 104.42% 349.03%, #FF4F28 0%, #FF8F28 46%, #FFBD28 100%)
          `,
        },
      });
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.shadow-highlight': {
          'box-shadow': `0.3125rem 0.4375rem 0.5rem 0rem #00000033`,
        },
      });
    }),
  ],
};

const config = withTV(base);

export default config;
