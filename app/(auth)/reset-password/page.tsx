import AuthCard from "@/features/auth/components/card";
import IconLogo from "@/components/icons/IconLogo";
import Image from "next/image";
import Button from "@/components/ui/button/button";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <AuthCard>
      <IconLogo className="mx-auto" />
      <h1
        id="reset-heading"
        className="text-2xl font-bold color-neutral-950 text-center dark:text-white"
      >
        Reset Your Password
      </h1>
      <p
        id="reset-desc"
        className="text-center text-neutral-600 block text-sm dark:text-neutral-300"
      >
        Choose a new password to secure your account.
      </p>
      <form className="space-y-4" aria-labelledby="reset-heading">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label
              htmlFor="new-password"
              className="color-neutral-950 font-medium text-sm dark:text-white"
            >
              New Password
            </label>
          </div>
          <input
            id="new-password"
            name="newPassword"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500 dark:border-neutral-600 dark:text-white"
            type="password"
            autoComplete="new-password"
            required
            aria-required="true"
            aria-describedby="reset-desc"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label
              htmlFor="confirm-password"
              className="color-neutral-950 font-medium text-sm dark:text-white"
            >
              Confirm New Password
            </label>
          </div>
          <input
            id="confirm-password"
            name="confirmPassword"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500 dark:border-neutral-600 dark:text-white"
            type="password"
            autoComplete="new-password"
            required
            aria-required="true"
            aria-describedby="reset-desc"
          />
        </div>
        <Button type="submit" aria-label="Reset password">
          Reset Password
        </Button>
      </form>
    </AuthCard>
  );
}
