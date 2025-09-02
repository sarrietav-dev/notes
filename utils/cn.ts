import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export default function cn(...classes: (string | undefined | false)[]) {
  return twMerge(clsx(...classes));
}
