import NoteForm from "@/features/notes/components/notes-form";

export default function ShowNote() {
  const note = {
    title: "React Performance Optimization",
    tags: "Dev, React",
    lastEdited: "2024-10-29",
    content: ""
  }

  return (
    <NoteForm note={note} />
  );
}
