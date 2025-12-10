import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Science Gothic - Variable font for name display
const scienceGothic = {
  variable: "--font-science-gothic",
};

export const metadata: Metadata = {
  title: "Deepak Nanaveni",
  description: "Full Stack Developer portfolio - Building fast, intuitive, and meaningful digital experiences at the intersection of full-stack development and AI.",
  keywords: ["full stack developer", "portfolio", "web development", "AI", "React", "Next.js", "Deepak Nanaveni"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Science+Gothic:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} antialiased`}
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
