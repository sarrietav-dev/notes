import { IconPlus } from "@/components/icons";
import Link from "next/link";

export default function AllNotes() {
  return (
    <>
      <h1 className="text-neutral-950 text-2xl font-bold">All notes</h1>
      <ul className="mt-4">
        <li>
          <Link href="/note/1">
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
      <Link
        href="/notes/new"
        aria-label="Create new note"
        className="absolute z-10 bottom-4 shadow-xl right-4 rounded-full size-12 flex items-center justify-center bg-blue-500"
      >
        <IconPlus className="fill-white size-7" />
      </Link>
    </>
  );
}
