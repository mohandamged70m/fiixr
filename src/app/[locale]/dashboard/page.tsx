"use client";

import { useUser } from "@clerk/nextjs";
import { useTranslations } from "use-intl";
import Nav from "@/components/nav";
import { Button, Card } from "@heroui/react";
import NextLink from "next/link";

export default function DashboardPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const t = useTranslations("auth");

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100" />
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Welcome back{user.firstName ? `, ${user.firstName}` : ""}
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {user.emailAddresses[0]?.emailAddress}
            </p>
          </div>
          <NextLink href="/">
            <Button
              className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              size="lg"
            >
              New Lookup
            </Button>
          </NextLink>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border border-zinc-200/60 p-6 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Lookups this month
            </p>
            <p className="mt-1 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
              0 / 100
            </p>
            <div className="mt-3 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
              <div
                className="h-2 rounded-full bg-accent"
                style={{ width: "0%" }}
              />
            </div>
          </Card>
          <Card className="border border-zinc-200/60 p-6 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Plan</p>
            <p className="mt-1 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
              Free
            </p>
            <p className="mt-1 text-sm text-zinc-400">100 errors / month</p>
          </Card>
          <Card className="border border-zinc-200/60 p-6 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Recent lookups
            </p>
            <p className="mt-1 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
              0
            </p>
            <p className="mt-1 text-sm text-zinc-400">No errors yet</p>
          </Card>
        </div>

        <Card className="mt-8 border border-zinc-200/60 p-12 text-center dark:border-zinc-800">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6 text-zinc-400"
              >
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              No lookups yet
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Paste your first error and let Fixr explain what went wrong.
            </p>
            <NextLink href="/">
              <Button
                className="mt-6 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              >
                Analyze an error
              </Button>
            </NextLink>
          </div>
        </Card>
      </main>
    </>
  );
}
