/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
      keyframes: {
        fadeInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInTop: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        backdropIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        backdropOut: { from: { opacity: '1' }, to: { opacity: '0' } },
      },

      modalIn: {
        from: { opacity: '0', transform: 'perspective(1000px) rotateX(-20deg) translateY(40px) scale(0.9)' },
        to: { opacity: '1', transform: 'perspective(1000px) rotateX(0) translateY(0) scale(1)' },
      },
      modalOut: {
        from: { opacity: '1', transform: 'perspective(1000px) rotateX(0) translateY(0) scale(1)' },
        to: { opacity: '0', transform: 'perspective(1000px) rotateX(15deg) translateY(30px) scale(0.92)' },
      },

      // Pindah card: next
      cardOutNext: {
        from: { opacity: '1', transform: 'perspective(1000px) rotateY(0) translateX(0)' },
        to: { opacity: '0', transform: 'perspective(1000px) rotateY(-50deg) translateX(-40px)' },
      },
      cardInNext: {
        from: { opacity: '0', transform: 'perspective(1000px) rotateY(50deg) translateX(40px)' },
        to: { opacity: '1', transform: 'perspective(1000px) rotateY(0) translateX(0)' },
      },
      // Pindah card: prev
      cardOutPrev: {
        from: { opacity: '1', transform: 'perspective(1000px) rotateY(0) translateX(0)' },
        to: { opacity: '0', transform: 'perspective(1000px) rotateY(50deg) translateX(40px)' },
      },
      cardInPrev: {
        from: { opacity: '0', transform: 'perspective(1000px) rotateY(-50deg) translateX(-40px)' },
        to: { opacity: '1', transform: 'perspective(1000px) rotateY(0) translateX(0)' },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
        fadeInTop: 'fadeInTop 1s ease-out forwards',
        backdropIn: 'backdropIn 0.3s ease-out forwards',
        backdropOut: 'backdropOut 0.3s ease-in forwards',
        modalIn: 'modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        modalOut: 'modalOut 0.3s ease-in forwards',
        cardOutNext: 'cardOutNext 0.2s ease-in forwards',
        cardInNext: 'cardInNext 0.3s ease-out forwards',
        cardOutPrev: 'cardOutPrev 0.2s ease-in forwards',
        cardInPrev: 'cardInPrev 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
  safelist: ['block', 'hidden'],
};
