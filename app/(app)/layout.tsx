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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          Skip to main content
        </a>
        <nav className="hidden lg:block bg-white min-w-60 px-4 py-3 border-r border-r-neutral-200" aria-label="Main navigation">
          <Link href="/" aria-label="Go to homepage" className="block mb-3">
            <IconLogo />
          </Link>
          <Link href="/" className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50" aria-current="page">
            <IconHome className="size-5 fill-neutral-700" />
            <span className="text-sm font-medium text-neutral-700">All Notes</span>
            <IconChevronRight className="ml-auto" />
          </Link>
          <Link href="/archive" className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50">
            <IconArchive className="size-5 stroke-neutral-700 fill-transparent" />
            <span className="text-sm font-medium text-neutral-700">Archived Notes</span>
            <IconChevronRight className="ml-auto" />
          </Link>
          <hr className="text-neutral-200 my-2" />
          <h2 className="text-sm font-medium text-neutral-500 mb-2">Tags</h2>
          <div className="space-y-1" role="list">
            <Link href="/tags/cooking" className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50" role="listitem">
              <IconTag className="size-5 stroke-neutral-700 fill-transparent" />
              <span className="text-sm font-medium text-neutral-700">Cooking</span>
              <IconChevronRight className="ml-auto" />
            </Link>
            <Link href="/tags/recipes" className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50" role="listitem">
              <IconTag className="size-5 stroke-neutral-700 fill-transparent" />
              <span className="text-sm font-medium text-neutral-700">Recipes</span>
              <IconChevronRight className="ml-auto" />
            </Link>
          </div>
        </nav>
        <div className="grow flex flex-col">
          <div className="items-center justify-between px-8 py-5 hidden lg:flex border-b border-b-neutral-200 bg-white">
            <h1 className="text-neutral-950 text-2xl font-bold" id="page-title">All Notes</h1>
            <div className="flex items-center gap-6">
              <div className="relative">
                <label htmlFor="search-input" className="sr-only">Search notes by title, content, or tags</label>
                <IconSearch className="fill-neutral-500 size-5 absolute left-4 top-4" aria-hidden="true" />
                <input
                  id="search-input"
                  className="border-neutral-300 text-neutral-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-3 pl-10"
                  placeholder="Search by title, content, or tags…"
                  name="search"
                  type="search"
                  aria-describedby="search-description"
                />
                <div id="search-description" className="sr-only">Enter keywords to search through your notes by title, content, or tags</div>
              </div>
              <Link href="/settings" aria-label="Open settings" className="p-2 rounded hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <IconSettings className="fill-neutral-500 size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <main id="main-content" className="bg-white rounded-t-lg px-4 py-5 md:px-8 md:py-6 grow flex flex-col relative" role="main">{children}</main>
        </div>
        <footer className="sticky bottom-0 lg:hidden">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
