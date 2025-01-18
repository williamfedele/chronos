import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chronos",
  description: "Reminder you of the time remaining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.className} antialiased dark font-semibold min-h-screen `}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
