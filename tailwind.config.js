const plugin = require('tailwindcss/plugin');
const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
const base = {
  darkMode: ['class', 'class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sh1: ['2.5rem', { fontWeight: '700', lineHeight: '1.2' }],
      sh2: ['2rem', { fontWeight: '700', lineHeight: '1.1' }],
      sh3: ['1.5rem', { lineHeight: '1.1' }],
      sh4: ['1.25rem', { lineHeight: '1.1' }],
      h1: ['2.5rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.03em' }],
      h2: ['2.125rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em' }],
      h3: ['2rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.02em' }],
      h4: ['1.5rem', { fontWeight: '800', lineHeight: '1.2', letterSpacing: '-0.01em' }],
      h5: ['1.25rem', { fontWeight: '800', lineHeight: '1.3', letterSpacing: '-0.01em' }],
      h6: ['1.125rem', { fontWeight: '800', lineHeight: '1.4', letterSpacing: '-0.005em' }],
      s1: ['1.5rem', { fontWeight: '600', lineHeight: '1.5', letterSpacing: '-0.015em' }],
      s2: ['1.25rem', { fontWeight: '600', lineHeight: '1.5', letterSpacing: '-0.01em' }],
      s3: ['1.125rem', { fontWeight: '600', lineHeight: '1.4' }],
      b1: ['1rem', { fontWeight: '400', lineHeight: '1.5' }],
      'b1-b': ['1rem', { fontWeight: '500', lineHeight: '1.5' }],
      b2: ['0.875rem', { fontWeight: '400', lineHeight: '1.5' }],
      'b2-b': ['0.875rem', { fontWeight: '500', lineHeight: '1.5' }],
      c1: ['0.8125rem', { fontWeight: '400', lineHeight: '1.3' }],
      'c1-b': ['0.8125rem', { fontWeight: '500', lineHeight: '1.3' }],
      c2: ['0.6875rem', { fontWeight: '400', lineHeight: '1.3' }],
      'c2-b': ['0.6875rem', { fontWeight: '500', lineHeight: '1.3' }],
      'bu-l': ['1.125rem', { fontWeight: '700', lineHeight: '1.5' }],
      'bu-m': ['1rem', { fontWeight: '700', lineHeight: '1.5' }],
      'bu-s': ['0.875rem', { fontWeight: '700', lineHeight: '1.5' }],
    },
    fontFamily: {
      primary: 'var(--font-primary)',
    },
    extend: {
      colors: {
        shiny: '#CCBC9A',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'primary-accent': {
          DEFAULT: '#FFBD28',
          foreground: '#1e1e1e',
        },
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
        stroke: {
          DEFAULT: 'hsl(var(--stroke-default))',
        },
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
        shiny: '0px -1px 1.8px 0px #FFFFFF inset',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        29: '7.25rem',
        31: '7.75rem',
        37: '9.25rem',
        49: '12.25rem',
        56: '14rem',
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        12.5: '3.125rem',
        29.5: '7.375rem',
        35.5: '8.875rem',
        'lg-screen-gutter': 'var(--lg-screen-gutter)',
        'md-screen-gutter': 'var(--md-screen-gutter)',
        'sm-screen-gutter': 'var(--sm-screen-gutter)',
      },
      screens: {
        xxs: '300px',
        xs: '480px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backdropBlur: {
        bg: '2.125rem',
      },
    },
    container: {
      center: 'true',
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
    require('tailwind-container-break-out'),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-primary-gradient': {
          background: `
            linear-gradient(157.41deg, rgba(255, 255, 255, 0.06) -13.64%, rgba(255, 255, 255, 0) 57.52%, rgba(255, 255, 255, 0.06) 128.67%),
            radial-gradient(93.18% 693.95% at 104.42% 349.03%, #FF4F28 0%, #FF8F28 46%, #FFBD28 100%)
          `,
        },
        '.bg-radial-primary-gradient': {
          background: 'radial-gradient(213.53% 1256.16% at 127.92% 377.15%, #FF4F28 0%, #FF8F28 70.93%, #FFBD28 100%)',
        },

        '.bg-glassmorphic': {
          'backdrop-filter': 'blur(2.125rem)',
          background:
            'linear-gradient(157.41deg, rgba(255, 255, 255, 0.14) -13.64%, rgba(255, 255, 255, 0) 57.52%, rgba(255, 255, 255, 0.14) 128.67%)',
        },
        '.notch': {
          '--r': '20px',
          /* control the rounded part*/
          '--s': '20px',
          /* control the size of the cut */
          ' --a': '30deg',
          /* control the depth of the curvature*/
          '--_d': '(var(--s) + var(--r))*cos(var(--a))',
          '--_m': `100%/calc(2*var(--r)) calc(2*var(--r)) no-repeat radial-gradient(50% 50%, #000 calc(100%), #0000)`,
          mask: `calc(50% + var(--_d)) var(--_m), calc(50% - var(--_d)) var(--_m),
            radial-gradient(var(--s) at 50% calc(100% + sin(var(--a))*var(--s)),
              #0000 100%, #000 calc(100%)) 0 calc(var(--r)*(sin(var(--a)) - 1)) no-repeat,
            linear-gradient(90deg, #000 calc(50% - var(--_d)), #0000 0 calc(50% + var(--_d)), #000 0);
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

module.exports = withTV(base);
