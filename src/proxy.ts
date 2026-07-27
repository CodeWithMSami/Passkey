import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";


export async function proxy(
  request: NextRequest
) {

  let response = NextResponse.next({
    request,
  });


  const supabase = createServerClient(

    process.env.SUPABASE_URL!,

    process.env.SUPABASE_ANON_KEY!,

    {
      cookies: {

        getAll() {
          return request.cookies.getAll();
        },


        setAll(cookiesToSet) {

          cookiesToSet.forEach(
            ({ name, value }) => {

              request.cookies.set(
                name,
                value
              );

              response.cookies.set(
                name,
                value
              );

            }
          );

        },

      },
    }
  );



  const {
    data: {
      user,
    },
  } = await supabase.auth.getUser();



  const pathname = request.nextUrl.pathname;



  const protectedRoutes = [
    "/passwords",
  ];


  const authRoutes = [
    "/login",
    "/signup",
  ];



  const isProtectedRoute =
    protectedRoutes.some((route) =>
      pathname.startsWith(route)
    );



  const isAuthRoute =
    authRoutes.some((route) =>
      pathname.startsWith(route)
    );



  // Not logged in → protect private pages
  if (
    isProtectedRoute &&
    !user
  ) {

    return NextResponse.redirect(
      new URL("/login", request.url)
    );

  }



  // Logged in → keep away from login/signup
  if (
    isAuthRoute &&
    user
  ) {

    return NextResponse.redirect(
      new URL("/passwords", request.url)
    );

  }



  return response;

}



export const config = {

  matcher: [
    "/passwords/:path*",
    "/login",
    "/signup",
  ],

};