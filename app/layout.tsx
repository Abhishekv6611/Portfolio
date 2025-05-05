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
  title: "Abhishek V | MERN Stack Web Developer & React.js Specialist",
  description:
    "Explore Abhishek V's portfolio featuring projects built with React.js, Node.js, and Tailwind CSS. MERN stack developer available for freelance and full-time opportunities.",
  keywords: [
    "Abhishek V",
    "MERN Stack Developer",
    "React.js Developer",
    "Node.js",
    "Web Developer Portfolio",
    "Full Stack Development",
    "Tailwind CSS",
    "Freelance Web Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Abhishek V" }],
  openGraph: {
    title: "Abhishek V | MERN Stack Web Developer",
    description:
      "Portfolio of Abhishek V, showcasing React.js, Node.js, and MERN stack projects. Contact for freelance or full-time web development roles.",
    url: "https://portfolio-taupe-rho-75.vercel.app", // 🔄 Replace with your real URL
    siteName: "Abhishek V Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dau1kgi0c/image/upload/v1740365580/pgd4g9pedzmln5xmzjmw.png", // 🔄 Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Abhishek V Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek V | MERN Stack Web Developer",
    description:
      "Check out Abhishek V's React.js and Node.js projects. MERN stack developer open for freelance work and full-time roles.",
    images: ["https://res.cloudinary.com/dau1kgi0c/image/upload/v1740365580/pgd4g9pedzmln5xmzjmw.png"], // 🔄 Replace with your OG image URL
  },
  metadataBase: new URL("https://portfolio-taupe-rho-75.vercel.app"), // 🔄 Replace with your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en" className={`${jerseyFont.variable} bg-[#0C3DFB]`}>
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
