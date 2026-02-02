import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/provider";

export const metadata: Metadata = {
  title: "Eatoo",
  description: " Grocery Delivery in 20 minutes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-linear-to-b from-blue-300 to-white">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
