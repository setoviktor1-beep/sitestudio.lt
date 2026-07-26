import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Web App Template
      </h1>
      <p className="max-w-xl text-lg text-gray-600">
        A production-ready starter built with Next.js, Better Auth and
        PostgreSQL — email verification, password reset, roles, audit log and
        a Docker setup ready for Coolify.
      </p>
      <div className="flex gap-4">
        <Link
          href="/sign-up"
          className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-700"
        >
          Create account
        </Link>
        <Link
          href="/sign-in"
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}
