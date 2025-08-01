import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Creative Developer",
  description: "A stunning portfolio showcasing creative web development with modern technologies including Framer Motion, GSAP, Three.js, and Lottie animations.",
  keywords: ["portfolio", "web development", "react", "next.js", "animations", "3D"],
  authors: [{ name: "Creative Developer" }],
  robots: "index, follow",
  openGraph: {
    title: "Portfolio - Creative Developer",
    description: "A stunning portfolio showcasing creative web development with modern technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Creative Developer",
    description: "A stunning portfolio showcasing creative web development with modern technologies.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
