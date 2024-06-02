import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage:{
      'img_bg_hero': "url('../assets/bg-hero.jpg')",
    },
    extend: {
      colors: {
        'primary-color': '#1F54F9',
        'primary-orange': '#EC7000',
        'primary-gray': ' #5C5C5C', 
        'second-gray': '#979797',
        'txt-gray': '#A6ACAF ',
        'gray-phone': '#F0EFEF',
        'opacity-gray': 'rgba(100, 80m 57, 0.1)'
      },

    },
  },
  plugins: [],
};
export default config;
