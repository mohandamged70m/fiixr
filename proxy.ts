import { clerkMiddleware } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./src/i18n/routing";

const intl = createMiddleware(routing);
const clerk = clerkMiddleware();

export default async function middleware(
  req: NextRequest,
  event: Parameters<typeof clerk>[1]
) {
  const res = await clerk(req, event);
  if (res) return res;
  return intl(req);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
