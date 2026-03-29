import { DM_Sans, Manrope, Plus_Jakarta_Sans, Bebas_Neue, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Fonts
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const pjs = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-pjs",
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
})


const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});



export const metadata = {
  title: "ClientForce",
  description: "Deploy AI Agents that refill your pipeline, personalize outreach, and close deals on autopilot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${dmSans.variable} ${manrope.variable} ${pjs.variable} ${bebasNeue.variable} ${sourceSerif.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}