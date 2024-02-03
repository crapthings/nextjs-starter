import { NextResponse } from 'next/server'

import { getSession } from '@/utils/session'

export async function middleware (req, res) {
  const { pathname } = req.nextUrl

  if (whitelist[pathname]) {
    console.debug('bypass whitelist', pathname)
    return NextResponse.next()
  }

  let user = null

  if (pathname.startsWith('/api/admin')) {
    const session = await getSession(req, res, true)
    user = session.user
  } else {
    const session = await getSession(req, res)
    user = session.user
  }

  if (!user) {
    return Response.json(
      { success: false, message: 'Authentication failed' },
      { status: 401 }
    )
  }
}

const whitelist = {
  '/api/health': true,
  '/api/register': true,
  '/api/login': true,
  '/api/logout': true,
  '/api/admin/administrators/register': true,
  '/api/admin/administrators/login': true,
}
