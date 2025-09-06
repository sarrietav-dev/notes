import {
  IconArchive,
  IconArrowLeft,
  IconClock,
  IconDelete,
  IconTag,
} from "@/components/icons";
import Link from "next/link";

export default function ShowNote() {
  return (
    <form className="flex flex-col gap-3" aria-labelledby="note-title">
      <div className="border-b border-neutral-200 flex pb-3">
        <Link href="/" className="mr-auto flex items-center gap-1">
          <IconArrowLeft className="size-4 fill-neutral-600" />
          <span className="text-sm text-neutral-600">Go back</span>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <button type="button" aria-label="Delete note">
            <IconDelete className="stroke-neutral-600 fill-none size-5" />
          </button>
          <button type="button" aria-label="Archive note">
            <IconArchive className="stroke-neutral-600 fill-none size-5" />
          </button>
          <button type="button" className="text-sm text-neutral-600">
            Cancel
          </button>
          <button className="text-sm text-blue-500" type="submit">
            Save Note
          </button>
        </div>
      </div>
      <h1
        id="note-title"
        className="text-2xl text-neutral-950 font-bold leading-7"
      >
        React Performance Optimization
      </h1>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center py-1">
            <IconTag className="stroke-neutral-600 fill-none size-4" />
            <span className="text-xs text-neutral-700">Tags</span>
          </div>
          <span className="text-xs text-neutral-950">Dev, React</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center py-1">
            <IconClock className="fill-neutral-600 size-4" />
            <span className="text-xs text-neutral-700">Last Edited</span>
          </div>
          <span className="text-xs text-neutral-950">29 Oct 2024</span>
        </div>
      </div>
      <hr className="text-neutral-200" />
      <label htmlFor="note-content" className="sr-only">
        Note Content
      </label>
      <textarea name="note-content" id="note-content"></textarea>
    </form>
  );
}
