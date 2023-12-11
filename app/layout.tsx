import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Restaurant",
  description: "A Fine Dining Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
