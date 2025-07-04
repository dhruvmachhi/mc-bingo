import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minecraft Bingo",
  description: "Minecraft UHC Bingo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/dirt.png')] bg-repeat bg-size-[80px] rendering" style={{ imageRendering: "pixelated" }}>{children}</body>
    </html>
  );
}
