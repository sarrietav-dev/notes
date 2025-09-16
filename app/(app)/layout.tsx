import type { Metadata } from "next";
import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";
import "../globals.css";
import { IconLogo } from "@/components/icons";
import Navigation from "@/components/layout/navigation";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
});
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: "Notes",
  description: "Notetaking app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSerif.variable} ${sourceCodePro.variable} antialiased bg-neutral-100 font-sans min-h-screen flex flex-col`}
      >
        <header className="py-6 px-8">
          <Link href="/" aria-label="Go to homepage">
            <IconLogo />
          </Link>
        </header>
        <main className="bg-white rounded-t-lg px-4 py-5 grow flex flex-col">{children}</main>
        <footer className="sticky bottom-0">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
