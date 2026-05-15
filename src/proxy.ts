import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0] ?? "";
  return locales.includes(preferred) ? preferred : defaultLocale;
}

const clerk = clerkMiddleware();

export default async function proxy(
  req: NextRequest,
  event: Parameters<typeof clerk>[1]
) {
  const clerkResponse = await clerk(req, event);
  if (clerkResponse) return clerkResponse;

  const { pathname } = req.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
