import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components";
import { SessionProvider } from "next-auth/react";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Wings Host",
  description: "The best game hosting in Russia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
