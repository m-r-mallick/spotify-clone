import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  const { pathname } = req.nextUrl
  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/login'

  // if token exists or request is meant for next-auth session & provider fetching
  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next()
  }

  // if token does not exists and request is meant for a protected route, redirect to login page
  if (!token && pathname !== '/login') {
    return NextResponse.redirect(redirectUrl) // redirect() accepts only string | NextURL | URL params
  }
}
