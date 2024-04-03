/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        tyrian_purple: {
          DEFAULT: '#6e1c3d',
          100: '#16060c',
          200: '#2c0b18',
          300: '#421124',
          400: '#581731',
          500: '#6e1c3d',
          600: '#a92b5e',
          700: '#d14d82',
          800: '#e089ac',
          900: '#f0c4d5'
        },
        coffee: {
          DEFAULT: '#795548',
          100: '#18110f',
          200: '#30221d',
          300: '#49332c',
          400: '#61443a',
          500: '#795548',
          600: '#a07261',
          700: '#b89588',
          800: '#d0b8b0',
          900: '#e7dcd7'
        },
        silver: {
          DEFAULT: '#bcaaa4',
          100: '#28211e',
          200: '#51413c',
          300: '#79625a',
          400: '#9e847c',
          500: '#bcaaa4',
          600: '#c9bbb6',
          700: '#d7ccc8',
          800: '#e4dddb',
          900: '#f2eeed'
        },
        ivory: {
          DEFAULT: '#fffff0',
          100: '#636300',
          200: '#c6c600',
          300: '#ffff2a',
          400: '#ffff8d',
          500: '#fffff0',
          600: '#fffff3',
          700: '#fffff6',
          800: '#fffff9',
          900: '#fffffc'
        },
        gunmetal: {
          DEFAULT: '#263238',
          100: '#070a0b',
          200: '#0f1416',
          300: '#161d21',
          400: '#1e272c',
          500: '#263238',
          600: '#475d68',
          700: '#6a8999',
          800: '#9bb1bb',
          900: '#cdd8dd'
        },
        timberwolf: {
          DEFAULT: '#d7ccc8',
          100: '#302623',
          200: '#604c45',
          300: '#907368',
          400: '#b49f97',
          500: '#d7ccc8',
          600: '#ded5d2',
          700: '#e7e0dd',
          800: '#efeae9',
          900: '#f7f5f4'
        },
        platinum: {
          DEFAULT: '#cfd8dc',
          100: '#242e32',
          200: '#485b63',
          300: '#6c8995',
          400: '#9eb1b9',
          500: '#cfd8dc',
          600: '#d9e0e4',
          700: '#e3e8ea',
          800: '#ecf0f1',
          900: '#f6f7f8'
        },
        cambridge_blue: {
          DEFAULT: '#88a097',
          100: '#1a211e',
          200: '#35423d',
          300: '#4f635b',
          400: '#69837a',
          500: '#88a097',
          600: '#a0b3ac',
          700: '#b8c6c1',
          800: '#cfd9d5',
          900: '#e7ecea'
        },
        liver: {
          DEFAULT: '#5d4037',
          100: '#130d0b',
          200: '#251916',
          300: '#382621',
          400: '#4b332c',
          500: '#5d4037',
          600: '#8b5f52',
          700: '#af8376',
          800: '#c9ada4',
          900: '#e4d6d1'
        },
        seasalt: {
          DEFAULT: '#fafafa',
          100: '#323232',
          200: '#646464',
          300: '#969696',
          400: '#c8c8c8',
          500: '#fafafa',
          600: '#fbfbfb',
          700: '#fcfcfc',
          800: '#fdfdfd',
          900: '#fefefe'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
