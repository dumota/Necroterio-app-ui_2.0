import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";
import { tokenConstant } from "./types/constants/Token";

const publicRouters = [
    { path: "/login", whenAuthenticated: "redirect" },
    { path: "/register", whenAuthenticated: "redirect" },
    { path: "/", whenAuthenticated: "next" },
] as const;

const REDIRECT_TO_HOME = "/";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRouter = publicRouters.find(router => router.path === path);
  const token = request.cookies.get(tokenConstant.TOKEN)?.value;

  if(!token && publicRouter )
  {
    return NextResponse.next();
  }

  if(token && publicRouter && publicRouter.whenAuthenticated === "redirect"){
    const redirectUlr = request.nextUrl.clone();
    redirectUlr.pathname = REDIRECT_TO_HOME;
    return NextResponse.redirect(redirectUlr);
  }


  return NextResponse.next();
}

export const config: MiddlewareConfig = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }