import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Noman Shahid | Senior Android Developer",
  description: "Portfolio of Noman Shahid — Senior Android Developer specializing in Kotlin, Jetpack Compose, MVVM, and scalable Android applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0B1120]" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
