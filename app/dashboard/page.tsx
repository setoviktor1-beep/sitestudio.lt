import Link from "next/link";
import { getSession } from "@/lib/session";
import { SignOutButton } from "./sign-out-button";
import { AvatarUpload } from "./avatar-upload";

export default async function DashboardPage() {
  // The layout already redirected anonymous users, so a session exists here.
  const session = (await getSession())!;
  const { user } = session;

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}</p>
        </div>
        <div className="flex items-center gap-3">
          {user.role === "admin" && (
            <Link
              href="/admin"
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
            >
              Admin area
            </Link>
          )}
          <SignOutButton />
        </div>
      </header>

      <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Your profile</h2>
        <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-gray-500">Name</dt>
            <dd className="font-medium">{user.name}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Email</dt>
            <dd className="font-medium">{user.email}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Role</dt>
            <dd className="font-medium capitalize">{user.role}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Email verified</dt>
            <dd className="font-medium">{user.emailVerified ? "Yes" : "No"}</dd>
          </div>
        </dl>
        <div className="mt-6 border-t border-gray-100 pt-4">
          <AvatarUpload />
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-gray-300 bg-white p-6">
        <h2 className="mb-2 text-lg font-semibold">Your content here</h2>
        <p className="text-sm text-gray-600">
          This is a placeholder section. Replace it with your application&apos;s
          actual dashboard content — the auth shell around it is ready.
        </p>
      </section>
    </main>
  );
}
