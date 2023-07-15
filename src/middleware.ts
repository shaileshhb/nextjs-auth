import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath = publicPaths.includes(path)
  const token = request.cookies.get('token')?.value || ""

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/profile", request.nextUrl))
  }

  // return NextResponse.redirect(new URL('/profile', request.nextUrl))
}

const publicPaths = [
  '/login', '/signup', '/',
]

const privatePaths = [
  '/profile'
]

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/profile/:path*',
    '/login',
    '/signup',
    '/logout',
  ],
}