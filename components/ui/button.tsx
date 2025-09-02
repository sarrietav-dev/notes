import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles> {}

const styles = cva(
  "rounded-lg py-3 px-4 text-center font-semibold w-full", // base styles
  {
    variants: {
      intent: {
        primary: "bg-blue-500 text-white",
        outline:
          "border border-neutral-300 text-neutral-950 dark:border-neutral-600 dark:text-white flex items-center justify-center gap-1",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  },
);
export default function Button({
  intent,
  className,
  children,
  ...rest
}: ButtonProps) {
  return <button className={styles({ intent, className })}>{children}</button>;
}
