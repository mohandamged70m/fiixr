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

export default async function middleware(
  req: NextRequest,
  event: Parameters<typeof clerk>[1]
) {
  const clerkResponse = await clerk(req, event);

  if (!clerkResponse) return NextResponse.next();

  if (clerkResponse.status >= 300 && clerkResponse.status < 400) {
    return clerkResponse;
  }

  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/") || pathname.startsWith("/trpc")) {
    return clerkResponse;
  }

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return clerkResponse;

  const locale = getLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const rewrite = NextResponse.rewrite(url);

  clerkResponse.headers.forEach((value, key) => {
    rewrite.headers.set(key, value);
  });

  return rewrite;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
