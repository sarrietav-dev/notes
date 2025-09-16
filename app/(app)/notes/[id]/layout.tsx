import { IconArchive, IconDelete } from "@/components/icons";
import Button from "@/components/ui/button/button";

export default function ShowNoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full">
      <main className="grow px-6 py-5">
        {children}
      </main>
      <div className="border-l border-l-neutral-300 px-4 py-5 space-y-3 min-w-2xs">
        <Button variant="outline" className="flex items-center text-left gap-2">
          <IconArchive className="size-5 stroke-black fill-transparent" />
          <span>Archive</span>
        </Button>
        <Button variant="outline" className="flex items-center text-left gap-2">
          <IconDelete className="size-5 stroke-black fill-transparent" />
          <span>Delete Note</span>
        </Button>
      </div>
    </div>
  )
}
