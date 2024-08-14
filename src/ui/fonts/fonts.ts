import { Be_Vietnam_Pro, Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
  variable: "--font-be",
});

export { nunito, bevietnam };
