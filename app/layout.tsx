import Navigation from "@/components/layout/navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ana Vargas",
  description: "I create engaging content for your brand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="">
        <Navigation />
        <div>{children}</div>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
