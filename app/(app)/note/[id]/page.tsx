import {
  IconArchive,
  IconArrowLeft,
  IconClock,
  IconDelete,
  IconTag,
} from "@/components/icons";

export default function ShowNote() {
  return (
    <form className="flex flex-col gap-3">
      <div className="border-b border-neutral-200 flex pb-3">
        <div className="mr-auto flex items-center gap-1">
          <IconArrowLeft className="size-4 fill-neutral-600" />
          <span className="text-sm text-neutral-600">Go back</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <IconDelete className="stroke-neutral-600 fill-none size-5" />
          <IconArchive className="stroke-neutral-600 fill-none size-5" />
          <span className="text-sm text-neutral-600">Cancel</span>
          <button className="text-sm text-blue-500" type="submit">
            Save Note
          </button>
        </div>
      </div>
      <h1 className="text-2xl text-neutral-950 font-bold leading-7">
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
      <hr className="text-neutral-200"/>
      <textarea name="" id=""></textarea>
    </form>
  );
}
