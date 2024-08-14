import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      bltext: "#003CA4",
      blue: "#488BFF",
      green: "#8FC94F",
      black: "#000000",
      white: "#FFFFFF",
      whiteE7: "#E7F1FF",
      whiteF7: "#F7FFEE",
      transparent: "transparent",
      current: "currentColor",
      bgcolor: "#FFF7E8",
      bgcardhover: "#c2dbff",
      bgcard: "#F0F6FF",
    },

    extend: {
      screens: {
        "512": "512px",
        "902": "902px",
        "1140": "1140px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          md: "30px",
        },
        screens: {
          xs: "100%",
          sm: "768px",
          md: "960px",
          lg: "1140px",
          xl: "1360px",
        },
      },
      fontSize: {
        h1: [
          "40px",
          {
            letterSpacing: "-1.1%",
            lineHeight: "150%",
          },
        ],

        h1small: [
          "20px",
          {
            letterSpacing: "-1.1%",
            lineHeight: "120%",
          },
        ],

        h2: [
          "36px",
          {
            letterSpacing: "-1.1%",
            lineHeight: "auto",
          },
        ],
        h3: [
          "24px",
          {
            letterSpacing: "-1.1%",
            lineHeight: "150%",
          },
        ],
        h3bl: [
          "24px",
          {
            letterSpacing: "-1.1%",
            lineHeight: "120%",
          },
        ],
        h4: [
          "20px",
          {
            letterSpacing: "0%",
            lineHeight: "auto",
          },
        ],
        h5: [
          "16px",
          {
            letterSpacing: "-1.1%",
            lineHeight: "auto",
          },
        ],
        body: [
          "20px",
          {
            letterSpacing: "0%",
            lineHeight: "165%",
          },
        ],
        bodysmall: [
          "18px",
          {
            letterSpacing: "0%",
            lineHeight: "auto",
          },
        ],
        small: [
          "14px",
          {
            letterSpacing: "0%",
            lineHeight: "150%",
          },
        ],
        button: [
          "16px",
          {
            letterSpacing: "-1.1%",
            lineHeight: "150%",
          },
        ],
      },
      borderRadius: {
        "5": "5px",
        "30": "30px",
        "40": "40px",
        "50": "50px",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        bevietnam: ["var(--font-be)", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #FFF7E8 0%, #FFFFFF 100%)",
        programscard: "url('/imgs/bg-card.jpg')",
      },
      spacing: {
        "h-header": "var(--h-header)",
      },
    },
  },
  plugins: [],
};
export default config;
