import AuthCard from "@/features/auth/components/card";
import IconLogo from "@/components/icons/IconLogo";
import Image from "next/image";
import Button from "@/components/ui/button/button";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <AuthCard>
      <IconLogo className="mx-auto" />
      <h1
        id="forgot-heading"
        className="text-2xl font-bold color-neutral-950 text-center dark:text-white"
      >
        Forgotten your password?
      </h1>
      <p
        id="forgot-desc"
        className="text-center text-neutral-600 block text-sm dark:text-neutral-300"
      >
        Enter your email below, and we’ll send you a link to reset it.
      </p>
      <form className="space-y-4" aria-labelledby="forgot-heading">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="color-neutral-950 font-medium text-sm dark:text-white"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            aria-describedby="forgot-desc"
            required
            aria-required="true"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500 dark:border-neutral-600 dark:text-white"
          />
        </div>
        <Button type="submit" aria-label="Send password reset link">
          Send Reset Link
        </Button>
      </form>
    </AuthCard>
  );
}
