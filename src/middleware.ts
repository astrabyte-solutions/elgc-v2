import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PATH = process.env.ADMIN_PATH || "cms-7f9a3b";
const ADMIN_PREFIX = `/admin/${ADMIN_PATH}`;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/")) {
    const segment = pathname.split("/")[2];
    if (segment !== ADMIN_PATH) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet, noimageindex");
    response.headers.set("Cache-Control", "no-store");
    return response;
  }

  if (pathname.startsWith("/industries")) {
    const url = request.nextUrl.clone();
    url.pathname = "/blogs";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/industries/:path*"],
};
