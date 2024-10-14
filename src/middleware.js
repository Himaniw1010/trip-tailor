import { NextResponse } from "next/server";
const hasLoggedInRoute = ["/dashboard", "/add-itinerary", "/itineraries/:slug/edit"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check for login route
  if (pathname === "/login") {
    const sessionCookie = request.cookies.get("session");
    if (sessionCookie) {
      const redirectUrl = request.nextUrl.searchParams.get("next") || "/dashboard";
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }
    return NextResponse.next();
  }

  // Check for logout route
  if (pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.set("session", "", { path: "/", maxAge: -1, httpOnly: true, secure: true });
    return response;
  }

  // Check for routes that require login
  if (hasLoggedInRoute.some(route => matchRoute(route, pathname))) {
    const sessionCookie = request.cookies.get("session");
    if (!sessionCookie) {
      return NextResponse.redirect(new URL(`/login?next=${pathname}`, request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

function matchRoute(route, pathname) {
  const regex = new RegExp(`^${route.replace(/:[^\/]+/g, '[^/]+')}$`);
  return regex.test(pathname);
}
