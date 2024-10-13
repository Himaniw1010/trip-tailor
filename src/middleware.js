import { NextResponse } from "next/server";
const hasLoggedInRoute = ["/dashboard", "/add-itinerary"]
export function middleware(request) {
  if (request.nextUrl.pathname === "/login") {
    const sessionCookie = request.cookies.get("session");
    if (sessionCookie) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }
  if (hasLoggedInRoute.includes(request.nextUrl.pathname)) {
    const sessionCookie = request.cookies.get("session");
    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }
  if (request.nextUrl.pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.set("session", "", { path: "/", maxAge: -1 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
}