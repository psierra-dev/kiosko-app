import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import type { NextRequest } from 'next/server'

type JwtPayload = {
  exp: number,
  role: "client" | "seller" | "admin"
}

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const jwt = cookies.get("token");
  const routePublic = ["/" , "/login", "/registe", "/registercommerce"]
  const routeClient = ["/home", "/kiosko", "/cart", "/order/"]
 

  if (
    !jwt && !jwt?.value &&
    !routePublic.includes(nextUrl.pathname)
  ) return NextResponse.redirect(new URL("/login", request.url));

  if(jwt && jwt?.value) {

    try {
      const {role, exp} = jwtDecode<JwtPayload>(jwt.value);

      if(!role || !exp) return NextResponse.redirect(new URL("/", request.url))
      
      const now = new Date()
      const time = now.getTime().toString().slice(0, 10)
      const isExp = +time > exp

      if(!isExp)  {
         if (
          role === "seller" &&
          !nextUrl.pathname.includes("/comercio") &&
          !nextUrl.pathname.includes("/detailsorder")
        ) {
          return NextResponse.redirect(new URL("/comercio", request.url));
        }
        

        if (
          role === "client" 
          && !routeClient.includes(nextUrl.pathname)
          && !nextUrl.pathname.startsWith("/order")
          && !nextUrl.pathname.startsWith("/api")
        ) {
          console.log("aqui client", nextUrl.pathname)
          return NextResponse.redirect(new URL("/home", request.url));
        }
      } else {
        if (
          !routePublic.includes(nextUrl.pathname)
        ) {
          return NextResponse.redirect(new URL("/login", request.url));
        }
      }
      
    } catch (error) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

  }else {
    if (!routePublic.includes(nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

    return NextResponse.next();
} 

export const config = {
  matcher: [
    "/home",
    "/comercio/:path*",
    "/",
    "/cart",
    "/kiosko/:path*",
    "/detailsorder",
    "/order/:path*",
    "/login",
  ],
};
