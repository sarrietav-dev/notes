import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles> {}

const styles = cva(
  "rounded-lg py-3 px-4 text-center font-semibold w-full disabled:text-neutral-300 disabled:bg-neutral-100 disabled:!border-none font-medium active:outline active:outline-neutral-500", // base styles
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-700",
        outline:
          "border border-neutral-300 text-neutral-950 dark:border-neutral-600 dark:text-white",
        secondary:
          "bg-neutral-100 color-neutral-600 hover:bg-white hover:border hover:border-neutral-300 hover:color-neutral-950",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
export default function Button({
  variant,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={styles({ variant, className })} {...rest}>
      {children}
    </button>
  );
}
