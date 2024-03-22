import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "logo-yel": "#ffce44",
        "logo-blue": "#0070ce",
        "logo-black": "#4c5356"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/herobg.png')",
        "cupula": "url('/assets/cupula.jpg')",
        "banner-stars": "url('/assets/banner-stars.png')",
        "ceu-brotas": "url('/assets/ceu-brotas.jpg')",
        "cupula-noite": "url('/assets/cupula-noite.jpg')",
        "obs-sara": "url('/assets/obs-sara.jpg')",
        "stone-range-2": "url('/assets/stone-range-2.jpg')",
        "telescopio-2": "url('/assets/telescopio-2.jpeg')",
        "coporate-img1": "url('/images/aquario-empresa.jpg')",
        "coporate-img2": "url('/images/aquario-empresa2.jpg')",
        "coporate-img3": "url('/images/auditorio-empresa.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
