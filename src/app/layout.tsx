import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Screamin' Egrets",
  description: "Harrisburg area band featuring original music and live shows",
  keywords: ["live music", "screamin egrets", "jam band", "original music", "harrisburg pa"],
   openGraph: {
    title: "Screamin' Egrets",
    description: "Harrisburg area band featuring original music and live shows",
    locale: "en_US",
    type: "website",
   }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
