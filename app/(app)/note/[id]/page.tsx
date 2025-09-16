"use client";

import {
  IconArchive,
  IconArrowLeft,
  IconClock,
  IconDelete,
  IconTag,
} from "@/components/icons";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function ShowNote() {
  const [title, setTitle] = useState("React Performance Optimization");
  const [tags, setTags] = useState("Dev, React");
  const [date, setDate] = useState("2024-10-29");
  const titleRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [title]);
  return (
    <form className="flex flex-col gap-3 grow" aria-labelledby="note-title">
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
      <label htmlFor="note-title" className="sr-only">
        Note Title
      </label>
      <textarea
        ref={titleRef}
        id="note-title"
        className="text-2xl text-neutral-950 font-bold leading-7 bg-transparent resize-none overflow-hidden focus-visible:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        rows={1}
      />
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center py-1">
            <IconTag className="stroke-neutral-700 fill-none size-4" />
            <label htmlFor="note-tags" className="text-xs text-neutral-700">
              Tags
            </label>
          </div>
          <input
            type="text"
            id="note-tags"
            className="text-xs text-neutral-950 bg-transparent focus-visible:outline-none"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center py-1">
            <IconClock className="fill-neutral-700 size-4" />
            <label
              htmlFor="note-last-edited"
              className="text-xs text-neutral-700"
            >
              Last Edited
            </label>
          </div>
          <input
            type="date"
            id="note-last-edited"
            className="text-xs text-neutral-950 bg-transparent focus-visible:outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <hr className="text-neutral-200" />
      <label htmlFor="note-content" className="sr-only">
        Note Content
      </label>
      <textarea name="note-content" id="note-content" className="flex-1 resize-none focus-visible:outline-none"></textarea>
    </form>
  );
}
