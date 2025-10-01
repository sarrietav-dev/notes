"use client";

import {
  IconArchive,
  IconArrowLeft,
  IconClock,
  IconDelete,
  IconTag,
} from "@/components/icons";
import Button from "@/components/ui/button/button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface NoteData {
  title?: string;
  tags?: string;
  content?: string;
  lastEdited?: string;
}

interface NoteFormProps {
  note?: NoteData;
  onSubmit?: (data: NoteData) => void;
  onCancel?: () => void;
  onDelete?: () => void;
  onArchive?: () => void;
}

export default function NoteForm({ note, onSubmit, onCancel, onDelete, onArchive }: NoteFormProps) {
  const [title, setTitle] = useState(note?.title || "");
  const [tags, setTags] = useState(note?.tags || "");
  const [content, setContent] = useState(note?.content || "");
  const [date, setDate] = useState(note?.lastEdited || "");
  const titleRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [title]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({
      title,
      tags,
      content,
      lastEdited: date,
    });
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <form className="flex flex-col gap-3 grow h-full" aria-labelledby="note-title" onSubmit={handleSubmit}>
      <div className="border-b border-neutral-200 flex pb-3 lg:hidden dark:border-neutral-700">
        <Link href="/notes" className="mr-auto flex items-center gap-1">
          <IconArrowLeft className="size-4 fill-neutral-600 dark:fill-neutral-400" />
          <span className="text-sm text-neutral-600 dark:text-neutral-400">Go back</span>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <button type="button" aria-label="Delete note" onClick={onDelete}>
            <IconDelete className="stroke-neutral-600 fill-none size-5 dark:stroke-neutral-400" />
          </button>
          <button type="button" aria-label="Archive note" onClick={onArchive}>
            <IconArchive className="stroke-neutral-600 fill-none size-5 dark:stroke-neutral-400" />
          </button>
          <button type="button" className="text-sm text-neutral-600 dark:text-neutral-400" onClick={handleCancel}>
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
        placeholder="Note Title"
        className="text-2xl text-neutral-950 font-bold leading-7 bg-transparent resize-none overflow-hidden focus-visible:outline-none dark:text-white dark:placeholder:text-neutral-500"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        rows={1}
      />
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center py-1">
            <IconTag className="stroke-neutral-700 fill-none size-4 dark:stroke-neutral-300" />
            <label htmlFor="note-tags" className="text-xs text-neutral-700 dark:text-neutral-300">
              Tags
            </label>
          </div>
          <input
            type="text"
            placeholder="e.g. Work, Personal"
            id="note-tags"
            className="text-xs text-neutral-950 bg-transparent focus-visible:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center py-1">
            <IconClock className="fill-neutral-700 size-4 dark:fill-neutral-300" />
            <label
              htmlFor="note-last-edited"
              className="text-xs text-neutral-700 dark:text-neutral-300"
            >
              Last Edited
            </label>
          </div>
          <input
            type="date"
            id="note-last-edited"
            className="text-xs text-neutral-950 bg-transparent focus-visible:outline-none dark:text-neutral-200"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <hr className="text-neutral-200 dark:text-neutral-700" />
      <label htmlFor="note-content" className="sr-only">
        Note Content
      </label>
      <textarea
        name="note-content"
        id="note-content"
        className="flex-1 resize-none focus-visible:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing your note..."
      ></textarea>
      <hr className="text-neutral-200 dark:text-neutral-700 mt-auto" />
      <div className="hidden lg:flex gap-4 justify-start max-w-64 items-end">
        <Button type="submit" className="text-sm !p-3">Save Note</Button>
        <Button variant="outline" className="ml-2 text-sm !p-3" onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  );
}
