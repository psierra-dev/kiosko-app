import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { nextUrl, cookies } = request;
  const jwt = cookies.get("token");

   /*if (
    !jwt &&
    nextUrl.pathname !== "/login" &&
    nextUrl.pathname !== "/register" &&
    nextUrl.pathname !== "/registercommerce"
  )
    return NextResponse.redirect(new URL("/login", request.url));*/

  /*  console.log(jwt)
  try {
    const { payload } = await jwtVerify(
      jwt?.value,
      new TextEncoder().encode("pepe")
    );
    const { role } = payload
    console.log(payload)
    if (
      role === "seller" &&
      !nextUrl.pathname.includes("/comercio") &&
      !nextUrl.pathname.includes("/detailsorder")
    ) {
      return NextResponse.redirect(new URL("/comercio", request.url));
    }
    if (
      role === "client" &&
      !nextUrl.pathname.includes("/inicio")
    ) {
      return NextResponse.redirect(new URL("/inicio", request.url));
    }
  } catch (error) {
    if (
      nextUrl.pathname !== "/login" &&
      nextUrl.pathname !== "/register" &&
      nextUrl.pathname !== "/registercommerce"
    ) {
      console.log("dentro del if");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }*/
  console.log("fuera del ifelse");
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/comercio/:path*",
    "/inicio/:path*",
    "/login",
    "/register",
    "/registercommerce",
    "/detailsorder",
  ],
}
