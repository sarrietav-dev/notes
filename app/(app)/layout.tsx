import type { Metadata } from "next";
import { Inter, Noto_Serif, Source_Code_Pro } from "next/font/google";
import "../globals.css";
import { IconArchive, IconChevronRight, IconHome, IconLogo, IconSearch, IconSettings, IconTag } from "@/components/icons";
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
        className={`${inter.variable} ${notoSerif.variable} ${sourceCodePro.variable} antialiased bg-neutral-100 font-sans min-h-screen flex flex-col lg:flex-row`}
      >
        <header className="py-6 px-8 lg:hidden">
          <Link href="/" aria-label="Go to homepage">
            <IconLogo />
          </Link>
        </header>
        <div className="hidden lg:block bg-white min-w-60 px-4 py-3 border-r border-r-neutral-200">
          <Link href="/" aria-label="Go to homepage" className="block mb-3">
            <IconLogo />
          </Link>
          <div className="flex items-center gap-2 px-3 py-2.5">
            <IconHome className="size-5 fill-neutral-700" />
            <span className="text-sm font-medium text-neutral-700">All Notes</span>
            <IconChevronRight className="ml-auto" />
          </div>
          <div className="flex items-center gap-2 px-3 py-2.5">
            <IconArchive className="size-5 stroke-neutral-700 fill-transparent" />
            <span className="text-sm font-medium text-neutral-700">Archived Notes</span>
            <IconChevronRight className="ml-auto" />
          </div>
          <hr className="text-neutral-200 my-2" />
          <h2 className="text-sm font-medium text-neutral-500 mb-2">Tags</h2>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-3 py-2.5">
              <IconTag className="size-5 stroke-neutral-700 fill-transparent" />
              <span className="text-sm font-medium text-neutral-700">Cooking</span>
              <IconChevronRight className="ml-auto" />
            </div>
            <div className="flex items-center gap-2 px-3 py-2.5">
              <IconTag className="size-5 stroke-neutral-700 fill-transparent" />
              <span className="text-sm font-medium text-neutral-700">Cooking</span>
              <IconChevronRight className="ml-auto" />
            </div>
          </div>
        </div>
        <div className="grow flex flex-col">
          <div className="items-center justify-between px-8 py-5 hidden lg:flex border-b border-b-neutral-200 bg-white">
            <h1 className="text-neutral-950 text-2xl font-bold">All Notes</h1>
            <div className="flex items-center gap-6">
              <div className="relative">
                <IconSearch className="fill-neutral-500 size-5 absolute left-4 top-4" />
                <input className="border-neutral-300 text-neutral-500 border rounded-lg focus-visible:outline-none px-4 py-3 pl-10" placeholder="Search by title, content, or tags…" name="search" />
              </div>
              <Link href="/settings">
                <IconSettings className="fill-neutral-500 size-5" />
              </Link>
            </div>
          </div>
          <main className="bg-white rounded-t-lg px-4 py-5 md:px-8 md:py-6 grow flex flex-col relative">{children}</main>
        </div>
        <footer className="sticky bottom-0 lg:hidden">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
