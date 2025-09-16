"use client";

import { IconPlus } from "@/components/icons";
import Button from "@/components/ui/button/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isNotesHome = pathname === '/notes';
  const shouldShowSidebar = isNotesHome || pathname.includes('/notes/');

  return (
    <div className="flex grow">
      <div className={`flex flex-col border-r border-r-neutral-300 px-8 py-5 ${!isNotesHome ? 'hidden lg:flex' : 'grow lg:grow-0'
        }`}>
        <h1 className="text-neutral-950 text-2xl font-bold lg:hidden">All notes</h1>
        <Link
          href="/notes/new"
          aria-label="Create new note"
          className="hidden lg:block"
        >
          <Button variant="primary">Create New Note</Button>
        </Link>
        <ul className="mt-4">
          <li>
            <Link href="/notes/1">
              <div className="p-2 space-y-3">
                <h2 className="text-neutral-950 font-semibold">
                  React Performance Optimization
                </h2>
                <div className="flex gap-1">
                  <div className="text-neutral-950 text-xs px-1.5 py-0.5 bg-neutral-200 rounded">
                    Dev
                  </div>
                  <div className="text-neutral-950 text-xs px-1.5 py-0.5 bg-neutral-200 rounded">
                    React
                  </div>
                </div>
                <time dateTime="2024-10-29" className="text-xs text-neutral-700">
                  29 Oct 2024
                </time>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`grow ${isNotesHome && "hidden lg:block"}`}>{children}</div>
      {isNotesHome && (
        <Link
          href="/notes/new"
          aria-label="Create new note"
          className="absolute z-10 bottom-4 shadow-2xl right-4 rounded-full size-12 md:size-14 flex items-center justify-center bg-blue-500 md:bottom-8 md:right-9 lg:hidden"
        >
          <IconPlus className="fill-white size-7 " />
        </Link>
      )}
    </div>
  );
}
