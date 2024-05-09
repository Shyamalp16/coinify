import { authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({
    publicRoutes:["/site"],
    beforeAuth(auth, req) {},
    afterAuth(auth, req) {
      const url = req.nextUrl;
      const searchParams = url.searchParams.toString();
      let hostname = req.headers
      const pathWithSearchParams = `${url.pathname}${searchParams.length>0?`?${searchParams}`:''}`

      const customSubDomain = hostname.get('host')?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`).filter(Boolean)[0];

      if(customSubDomain){
        return NextResponse.rewrite(new URL(`/${customSubDomain}${pathWithSearchParams}`))
      }

      if(url.pathname === "/sign-in" || url.pathname === "/sign-up"){
        return NextResponse.redirect(new URL(`/dashboard/sign-in`, req.url))
      }

      if(url.pathname === "/" || url.pathname === "/site" && url.host === process.env.NEXT_PUBLIC_DOMAIN){
        return NextResponse.rewrite(new URL('/site', req.url))
      }

      if(url.pathname.startsWith('/agency') || url.pathname.startsWith('/dashboard')){
        return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url))
      }
    },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
};