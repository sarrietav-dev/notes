import cn from "@/utils/cn";

export default function IconCross({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={cn(className)}
    >
      <path
        stroke="#0E121B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6 6 12 12M18 6 6 18"
      />
    </svg>
  );
}
