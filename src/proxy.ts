import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/(en|ar)/dashboard(.*)",
]);

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0]?.split("-")[0] ?? "";
  return locales.includes(preferred) ? preferred : defaultLocale;
}

const clerk = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export default async function proxy(
  req: NextRequest,
  event: Parameters<typeof clerk>[1]
) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/") || pathname.startsWith("/trpc")) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
    return NextResponse.rewrite(url);
  }

  return clerk(req, event) ?? NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
