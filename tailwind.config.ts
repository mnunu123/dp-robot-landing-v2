import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6262',
        accent: '#eb2fde',
      },
      fontFamily: {
        cafe24: ['var(--font-cafe24)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        // [추가] 5초 주기로 부드럽게 사라졌다 나타나는 효과
        'fade-in-out': 'fadeInOut 5s ease-in-out infinite', 
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        // [추가] 0.8 투명도에서 시작해 0까지 갔다가 다시 돌아오는 설정
        fadeInOut: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0' },
        },
      },
},
}
}


export default config
