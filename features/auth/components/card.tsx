import { type ReactNode } from "react";

export default function AuthCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl px-4 py-10 border border-neutral-200 space-y-4 max-w-xl min-w-sm md:min-w-xl dark:border-neutral-950 dark:bg-neutral-950">
      {children}
    </div>
  );
}
