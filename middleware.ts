import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isTokenExpired, verifyToken } from "./lib/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/admin")) {
    const aa =  cookies().get("aa");

    
    if(!aa || !aa.value  ){
       return  NextResponse.redirect(new URL("/admin/login", request.url));
       
    }

    const expired  =  await isTokenExpired(aa?.value);
    console.log("aa", aa, expired);
    if(expired){
       return  NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/admin'
    ]
}
