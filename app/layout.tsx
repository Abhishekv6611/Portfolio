import type { Metadata } from "next";
import {  Jersey_10 } from "next/font/google";
import "./globals.css";

const jerseyFont = Jersey_10({
  weight: '400', // Example weight, adjust as needed
  subsets: ['latin'], // Or other relevant subsets
  variable: "--font-jersey",
});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Abhishek - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jerseyFont.variable}`}>
      <body
       className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
