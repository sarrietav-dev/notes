import Image from "next/image";
import Link from "next/link";

export default function ResetPassword() {
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
        Reset Your Password
      </p>
      <small className="text-center text-neutral-600 block text-sm">
        Choose a new password to secure your account.
      </small>
      <form className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label className="color-neutral-950 font-medium text-sm">
              New Password
            </label>
          </div>
          <input
            className="rounded-lg border-neutral-300 border py-3 px-4 color-neutral-500"
            type="password"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-baseline">
            <label className="color-neutral-950 font-medium text-sm">
              Confirm New Password
            </label>
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
          Reset Password
        </button>
      </form>
    </div>
  );
}
