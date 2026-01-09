import { NextResponse } from "next/server";

export function middleware(req) {
  const role = req.cookies.get("role")?.value;

  if (req.nextUrl.pathname.startsWith("/dashboard/admin-profile") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
