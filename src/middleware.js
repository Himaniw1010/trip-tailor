import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/login") {
    const sessionCookie = request.cookies.get("session");
    if (sessionCookie) {
      return NextResponse.redirect(new URL("/", request.url));
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
