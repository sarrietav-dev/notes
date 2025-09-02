import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="bg-white rounded-xl px-4 py-10 border border-neutral-200 space-y-4 max-w-xl min-w-sm md:min-w-xl">
      <Image
        src="/images/logo.svg"
        alt="Google icon"
        width={95}
        height={28}
        className="mx-auto"
      />
      <p className="text-2xl font-bold color-neutral-950 text-center">
        Create Your Account
      </p>
      <small className="text-center text-neutral-600 block text-sm">
        Sign up to start organizing your notes and boost your productivity.
      </small>
      <form className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="color-neutral-950 font-medium text-sm">Email Address</label>
          <input type="email" className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500" />
          <hr className="border-neutral-200" />
          <p className="text-sm text-neutral-600 text-center">
            No account yet?{" "}
            <Link href="/signup">
              <strong className="text-neutral-950">Sign Up</strong>
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label className="color-neutral-950 font-medium text-sm">Password</label>
          </div>
          <input
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500"
            type="password"
          />
        </div>
        <button
          className="rounded-lg py-3 px-4 text-center bg-blue-500 text-white font-semibold w-full"
          type="submit"
        >
          Sign up
        </button>
      </form>
      <div className="border-t border-neutral-200 pt-6 space-y-4">
        <p className="text-sm text-neutral-600 text-center">Or sign in with:</p>
        <button className="rounded-lg py-3 px-4 text-center flex items-center justify-center text-neutral-950 border border-neutral-300 gap-1 font-semibold w-full">
          <Image
            src="/images/icon-google.svg"
            alt="Google icon"
            width={24}
            height={24}
          />
          <span className="font-medium">Google</span>
        </button>
      </div>
      <hr className="border-neutral-200" />
      <p className="text-sm text-neutral-600 text-center">
        Already have an account?{" "}
        <Link href="/signin">
          <strong className="text-neutral-950">Sign In</strong>
        </Link>
      </p>
    </div>
  );
}
