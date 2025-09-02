import Image from "next/image";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="bg-white rounded-xl px-4 py-10 border border-neutral-200 space-y-4 max-w-xl min-w-sm md:min-w-xl">
      <Image
        src="/images/logo.svg"
        alt="Note logo"
        width={95}
        height={28}
        className="mx-auto"
      />
      <h1
        id="reset-heading"
        className="text-2xl font-bold color-neutral-950 text-center"
      >
        Reset Your Password
      </h1>
      <p id="reset-desc" className="text-center text-neutral-600 block text-sm">
        Choose a new password to secure your account.
      </p>
      <form className="space-y-4" aria-labelledby="reset-heading">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label
              htmlFor="new-password"
              className="color-neutral-950 font-medium text-sm"
            >
              New Password
            </label>
          </div>
          <input
            id="new-password"
            name="newPassword"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500"
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
              className="color-neutral-950 font-medium text-sm"
            >
              Confirm New Password
            </label>
          </div>
          <input
            id="confirm-password"
            name="confirmPassword"
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500"
            type="password"
            autoComplete="new-password"
            required
            aria-required="true"
            aria-describedby="reset-desc"
          />
        </div>
        <button
          className="rounded-lg py-3 px-4 text-center bg-blue-500 text-white font-semibold w-full"
          type="submit"
          aria-label="Reset password"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
