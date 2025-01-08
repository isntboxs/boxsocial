import { NextResponse, type NextRequest } from "next/server"

import { authRoutes, protectedRoutes } from "@/routes"
import { betterFetch } from "@better-fetch/fetch"

import { env } from "@/env"
import type { Session } from "@/lib/auth/types"

export default async function authMiddleware(request: NextRequest) {
  const { nextUrl } = request
  const pathName = nextUrl.pathname

  const isAuthRoute = authRoutes.includes(pathName)
  const isProtectedRoute = protectedRoutes.includes(pathName)

  const cookies = request.headers.get("cookie")

  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: env.NEXT_PUBLIC_APP_URL,
      headers: {
        cookie: cookies || "",
      },
    },
  )

  if (isAuthRoute) {
    if (session) {
      return NextResponse.redirect(new URL("/", request.url))
    }
    return NextResponse.next()
  }
  if (!session && isProtectedRoute) {
    let callbackUrl = pathName
    if (nextUrl.search) {
      callbackUrl += nextUrl.search
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl)

    return Response.redirect(
      new URL(`/sign-in?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
}
