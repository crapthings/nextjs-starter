import { NextResponse } from 'next/server'

import { getSession } from '@/utils/session'

export async function middleware (req, res) {
  const { pathname } = req.nextUrl

  if (whitelist[pathname]) {
    console.debug('bypass whitelist', pathname)
    return NextResponse.next()
  }

  const { user } = await getSession(req, res)

  if (!user) {
    return Response.json(
      { success: false, message: 'Authentication failed' },
      { status: 401 }
    )
  }
}

const whitelist = {
  '/api/register': true,
  '/api/login': true,
}
