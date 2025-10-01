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
        className={`${inter.variable} ${notoSerif.variable} ${sourceCodePro.variable} antialiased bg-neutral-100 font-sans min-h-screen flex flex-col lg:flex-row dark:bg-neutral-900`}
      >
        <header className="py-6 px-8 lg:hidden">
          <Link href="/" aria-label="Go to homepage">
            <IconLogo />
          </Link>
        </header>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
          Skip to main content
        </a>
        <nav className="hidden lg:block bg-white min-w-60 px-4 py-3 border-r border-r-neutral-200 dark:bg-neutral-800 dark:border-r-neutral-700" aria-label="Main navigation">
          <Link href="/notes" aria-label="Go to homepage" className="block mb-3">
            <IconLogo />
          </Link>
          <Link href="/notes" className="flex group items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-current="page">
            <IconHome className="size-5 fill-neutral-700 dark:fill-neutral-300" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">All Notes</span>
            <IconChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity " />
          </Link>
          <Link href="/archive" className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
            <IconArchive className="size-5 stroke-neutral-700 fill-transparent dark:stroke-neutral-300" />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Archived Notes</span>
            <IconChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity " />
          </Link>
          <hr className="text-neutral-200 my-2 dark:text-neutral-700" />
          <h2 className="text-sm font-medium text-neutral-500 mb-2 dark:text-neutral-400">Tags</h2>
          <div className="space-y-1" role="list">
            <Link href="/tags/cooking" className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" role="listitem">
              <IconTag className="size-5 stroke-neutral-700 fill-transparent dark:stroke-neutral-300" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Cooking</span>
              <IconChevronRight className="ml-auto" />
            </Link>
            <Link href="/tags/recipes" className="flex items-center gap-2 px-3 py-2.5 rounded hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-neutral-50 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" role="listitem">
              <IconTag className="size-5 stroke-neutral-700 fill-transparent dark:stroke-neutral-300" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Recipes</span>
              <IconChevronRight className="ml-auto" />
            </Link>
          </div>
        </nav>
        <div className="grow flex flex-col">
          <div className="items-center justify-between px-8 py-5 hidden lg:flex border-b border-b-neutral-200 bg-white dark:bg-neutral-800 dark:border-b-neutral-700">
            <h1 className="text-neutral-950 text-2xl font-bold dark:text-white" id="page-title">All Notes</h1>
            <div className="flex items-center gap-6">
              <div className="relative">
                <label htmlFor="search-input" className="sr-only">Search notes by title, content, or tags</label>
                <IconSearch className="fill-neutral-500 size-5 absolute left-4 top-4 dark:fill-neutral-400" aria-hidden="true" />
                <input
                  id="search-input"
                  className="border-neutral-300 text-neutral-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-4 py-3 pl-10 dark:bg-neutral-700 dark:border-neutral-600 dark:text-neutral-200"
                  placeholder="Search by title, content, or tags…"
                  name="search"
                  type="search"
                  aria-describedby="search-description"
                />
                <div id="search-description" className="sr-only">Enter keywords to search through your notes by title, content, or tags</div>
              </div>
              <Link href="/settings" aria-label="Open settings" className="p-2 rounded hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-neutral-700">
                <IconSettings className="fill-neutral-500 size-5 dark:fill-neutral-400" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-t-lg grow flex flex-col relative dark:bg-neutral-800">{children}</div>
        </div>
        <footer className="sticky bottom-0 lg:hidden">
          <Navigation />
        </footer>
      </body>
    </html>
  );
}
