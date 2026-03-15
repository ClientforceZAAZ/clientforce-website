import { DM_Sans, Manrope, Plus_Jakarta_Sans, Bebas_Neue  } from "next/font/google";
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



export const metadata = {
  title: "ClientForce",
  description: "Deploy AI Agents that refill your pipeline, personalize outreach, and close deals on autopilot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${dmSans.variable} ${manrope.variable} ${pjs.variable} ${bebasNeue.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}