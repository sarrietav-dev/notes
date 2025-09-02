
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
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
        Forgotten your password?
      </p>
      <small className="text-center text-neutral-600 block text-sm">
        Enter your email below, and we’ll send you a link to reset it.
      </small>
      <form className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="color-neutral-950 font-medium text-sm">Email Address</label>
          <input type="email" className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500" />
        </div>
        <button
          className="rounded-lg py-3 px-4 text-center bg-blue-500 text-white font-semibold w-full"
          type="submit"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
