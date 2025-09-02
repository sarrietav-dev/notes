import IconGoogle from "@/components/icons/IconGoogle";
import IconLogo from "@/components/icons/IconLogo";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="bg-white rounded-xl px-4 py-10 border border-neutral-200 space-y-4 max-w-xl min-w-sm md:min-w-xl">
      <IconLogo className="mx-auto" />
      <h1
        id="signup-heading"
        className="text-2xl font-bold color-neutral-950 text-center"
      >
        Create Your Account
      </h1>
      <p
        id="signup-desc"
        className="text-center text-neutral-600 block text-sm"
      >
        Sign up to start organizing your notes and boost your productivity.
      </p>
      <form className="space-y-4" aria-labelledby="signup-heading">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="color-neutral-950 font-medium text-sm"
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
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label
              htmlFor="password"
              className="color-neutral-950 font-medium text-sm"
            >
              Password
            </label>
          </div>
          <input
            id="password"
            name="password"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500"
            type="password"
            autoComplete="new-password"
            required
            aria-required="true"
          />
        </div>
        <button
          className="rounded-lg py-3 px-4 text-center bg-blue-500 text-white font-semibold w-full"
          type="submit"
          aria-label="Sign up"
        >
          Sign up
        </button>
      </form>
      <div className="border-t border-neutral-200 pt-6 space-y-4">
        <p className="text-sm text-neutral-600 text-center">Or sign in with:</p>
        <button
          aria-label="Sign up with Google"
          className="rounded-lg py-3 px-4 text-center flex items-center justify-center text-neutral-950 border border-neutral-300 gap-1 font-semibold w-full"
          type="button"
        >
          <IconGoogle />
          <span className="font-medium">Google</span>
        </button>
      </div>
      <hr className="border-neutral-200" />
      <p className="text-sm text-neutral-600 text-center">
        Already have an account?{" "}
        <Link href="/signin" aria-label="Sign in">
          <strong className="text-neutral-950">Sign In</strong>
        </Link>
      </p>
    </div>
  );
}
