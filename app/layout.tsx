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
  title: "Cool Finds AE",
  description: "All my essential product links in one place",
  openGraph: {
    title: "Cool Finds AE",
    description: "All the products links",
    url: "https://coolfinds.vercel.app",
    siteName: "Cool Finds",
    images: [
      {
        url: "/me.jpg", // This points to the file you added
        width: 1200,
        height: 1200,
        alt: "Cool Finds AE Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
