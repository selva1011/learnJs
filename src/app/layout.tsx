import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JavaScript",
  description: "Hi, I'm Selva Ganapathi, this is for my educationl purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.svgrepo.com/show/349419/javascript.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
