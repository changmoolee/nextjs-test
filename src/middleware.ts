import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들웨어가 실행중입니다.");

  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 경로를 리다이렉팅.");

    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
