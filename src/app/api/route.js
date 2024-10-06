import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want

  const cookieValue = cookies().get("session") ? true : false;

  return NextResponse.json({ isLoggedIn: cookieValue }, { status: 200 });
}
