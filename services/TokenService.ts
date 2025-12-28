import { tokenConstant } from "@/types/constants/Token";
import { setCookie, destroyCookie, parseCookies } from "nookies";

export function setAuthToken(token: string) {
  setCookie(undefined, tokenConstant.TOKEN, token, {
    // maxAge: 60 * 60 * 24 * 30, // 30 dias
    path: "/",
  });

//   setCookie(undefined, "auth.refreshToken", refreshToken, {
//     maxAge: 60 * 60 * 24 * 30,
//     path: "/",
//   });
}

export function destroyAuthCookies() {
  destroyCookie(undefined, tokenConstant.TOKEN, { path: "/" });
}

export function getAuthToken() {
  const cookies = parseCookies();
  return cookies[tokenConstant.TOKEN];
}
