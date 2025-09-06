import { IconPlus } from "@/components/icons";
import Button from "@/components/ui/button/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
                <button className="text-neutral-950 text-xs px-1.5 py-0.5 bg-neutral-200 rounded">
                  Dev
                </button>
                <button className="text-neutral-950 text-xs px-1.5 py-0.5 bg-neutral-200 rounded">
                  React
                </button>
              </div>
              <p className="text-xs text-neutral-700">29 Oct 2024</p>
            </div>
          </Link>
        </li>
      </ul>
      <Button className="absolute bottom-4 right-4 !rounded-full !size-12 flex items-center justify-center">
        <IconPlus className="fill-white" />
      </Button>
    </>
  );
}
