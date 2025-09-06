import AuthCard from "@/features/auth/components/card";
import IconGoogle from "@/components/icons/IconGoogle";
import IconLogo from "@/components/icons/IconLogo";
import Button from "@/components/ui/button/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <AuthCard>
      <IconLogo className="mx-auto" />
      <h1
        id="signup-heading"
        className="text-2xl font-bold color-neutral-950 text-center dark:text-white"
      >
        Create Your Account
      </h1>
      <p
        id="signup-desc"
        className="text-center text-neutral-600 block text-sm dark:text-neutral-300"
      >
        Sign up to start organizing your notes and boost your productivity.
      </p>
      <form className="space-y-4" aria-labelledby="signup-heading">
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
            aria-describedby="signup-desc"
            autoComplete="email"
            required
            aria-required="true"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500 dark:border-neutral-600 dark:text-white"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label
              htmlFor="password"
              className="color-neutral-950 font-medium text-sm dark:text-white"
            >
              Password
            </label>
          </div>
          <input
            id="password"
            name="password"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500 dark:border-neutral-600 dark:text-white"
            type="password"
            autoComplete="new-password"
            required
            aria-required="true"
          />
        </div>
        <Button type="submit" aria-label="Sign up">
          Sign up
        </Button>
      </form>
      <div className="border-t border-neutral-200 pt-6 space-y-4 dark:border-neutral-800">
        <p className="text-sm text-neutral-600 text-center dark:text-neutral-300">
          Or sign in with:
        </p>
        <Button
          aria-label="Sign up with Google"
          variant="outline"
          type="button"
          className="flex items-center justify-center gap-1"
        >
          <IconGoogle />
          <span className="font-medium">Google</span>
        </Button>
      </div>
      <hr className="border-neutral-200 dark:border-neutral-800" />
      <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
        Already have an account?{" "}
        <Link href="/signin" aria-label="Sign in">
          <strong className="text-neutral-950 dark:text-white">Sign In</strong>
        </Link>
      </p>
    </AuthCard>
  );
}
