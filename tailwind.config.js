/**
 * @type {import('tailwindcss').Config}
 */
const config = {
  content: ['./src/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        smaller: { max: '389px' },
        sm: { max: '599.95px' },
        md: { max: '959.95px', min: '600px' },
        lg: { max: '1279.95px', min: '960px' },
        xl: { min: '1280px' },
        xxl: { min: '1600px' },
        '3xl': { max: '1920px' },
        mobile: { max: '759.99px' },
        mobile_sm: { max: '432px' },
        pc: { min: '759.99px' },
        pc_sm: { max: '1260px', min: '760px' },
      },
      fontFamily: {
        grotesk: ['var(--font-grotesk)'],
        lato: ['Lato', 'sans-serif'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-grey': 'linear-gradient(290deg, #FFF 0%, #5C5C5C 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD64D 0%, #FFAD33 97.6%)',
        'gradient-gold-light': 'linear-gradient(87deg, #F28D00 2.18%, #FFAD33 97.84%)',
        'gradient-gold-180': 'linear-gradient(180deg, #FFD64D 0%, #FFAD33 97.6%)',
        'xmas-radial':
          'radial-gradient(238.39% 44.19% at 96.59% 31.25%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%), radial-gradient(182.56% 55.34% at 5.68% 100%, rgba(246, 251, 34, 0.51) 0%, rgba(255, 158, 69, 0.00) 100%), radial-gradient(137.51% 118.3% at 32.95% 0%, rgba(255, 137, 137, 0.92) 21.25%, rgba(255, 169, 106, 0.57) 88.62%), radial-gradient(178.09% 220.16% at 94.89% -132.81%, #FF7A00 67.59%, rgba(255, 199, 0, 0.38) 100%)',
      },
      boxShadow: {
        area: '0px 0px 8px 0px rgba(0, 0, 0, 0.36)',
        'xmas-shadow': `0px 0px 30.227px 0px rgba(255, 255, 255, 0.60) inset,
                          -30.227px -30.227px 75.568px 0px rgba(211, 70, 155, 0.40),
                          0px 30.227px 90.682px 0px rgba(232, 205, 110, 0.20),
                          0px 15.114px 90.682px 0px rgba(174, 113, 41, 0.80)`,
      },
      height: {
        'screen-dynamic': '100svh', // 自定义类 h-screen-dynamic
      },
      keyframes: {
        'float-15': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      colors: {
        yellow: "var(--primary-color)",
        'sosored': '#EB5F31',
        'primary': '#121212',
        'button-up': '#18B36B',
        'brand': '#FF7637',
        'link': '#9BC4F4',
        'default': '#444444',
      },
    },
  },
  plugins: [
    import('tailwind-scrollbar'),
  ],
};
export default config;

