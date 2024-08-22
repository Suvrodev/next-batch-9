import { NextResponse } from "next/server";

const user = true;

export const middleware = (request) => {
  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
    // return NextResponse.redirect("/login");
  } else {
    NextResponse.next();
  }
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
