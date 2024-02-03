import { NextResponse } from 'next/server'

import { getSession } from '@/utils/session'

export const config = {
  matcher: [
    '/frontend/:path*',
    '/backend/:path*',
    '/api/:path*',
  ],
}

const whitelist = {
  '/frontend/login': true,
  '/backend/login': true,
  '/api/health': true,
  '/api/register': true,
  '/api/login': true,
  '/api/logout': true,
  '/api/admin/register': true,
  '/api/admin/login': true,
  '/api/admin/logout': true,
}

const pageHandler = async ({ req, res, url, isAdmin }) => {
  const { user } = await getSession(req, res, isAdmin)

  if (!user) {
    return NextResponse.redirect(new URL(url, req.url))
  }
}

const apiHandler = async (req, res) => {
  const { pathname } = req.nextUrl

  const isAdmin = pathname.startsWith('/api/admin')

  const { user } = await getSession(req, res, isAdmin)

  if (!user) {
    return Response.json(
      { success: false, message: 'Authentication failed' },
      { status: 401 }
    )
  }
}

export async function middleware (req, res) {
  const { pathname } = req.nextUrl

  if (whitelist[pathname]) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/frontend')) {
    return await pageHandler({ req, res, url: '/frontend/login', isAdmin: false })
  }

  if (pathname.startsWith('/backend')) {
    return await pageHandler({ req, res, url: '/backend/login', isAdmin: true })
  }

  if (pathname.startsWith('/api')) {
    return await apiHandler(req, res)
  }
}
