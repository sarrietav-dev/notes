import type { Metadata } from "next";
import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";
import "../globals.css";
import { IconLogo } from "@/components/icons";
import Navigation from "@/components/layout/navigation";

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
        className={`${inter.variable} ${notoSerif.variable} ${sourceCodePro.variable} antialiased bg-neutral-100 font-sans`}
      >
        <header className="py-6 px-8">
          <IconLogo />
        </header>
        <main className="bg-white rounded-t-lg px-4 py-5">{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
