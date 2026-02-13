import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import EstimatorWidget from "@/components/widgets/EstimatorWidget";
import PageTransition from "@/components/animations/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "SolidGround Concrete Solutions",
  description: "Built to Last. Crafted to Impress. Premium concrete craftsmanship for residential & commercial projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased`}
      >
        <Navigation />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
        <EstimatorWidget />
      </body>
    </html>
  );
}
