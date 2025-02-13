import { createCookie } from "@remix-run/node";

export const sidebarStateCookie = createCookie("sidebar_state", {
  path: "/",
  httpOnly: false, // Can be accessed by frontend
  sameSite: "lax",
});
