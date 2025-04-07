import type { Metadata } from "next";
import {  Jersey_10 } from "next/font/google";
import "./globals.css";
import { ReactLenis } from 'lenis/react'
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
}>) 
{
  return (
    <html lang="en" className={`${jerseyFont.variable}`}>
        <ReactLenis root>
      <body
       className="antialiased bg-[#0C3DFB]"
       
       >
        {children}
      </body>
        </ReactLenis>
    </html>
  );
}
