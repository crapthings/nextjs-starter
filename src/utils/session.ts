import { cookies } from 'next/headers'
import { getIronSession } from 'iron-session'

export async function getSession (req, res, isAdmin = false) {
  return await getIronSession(req, res, {
    password: isAdmin ? process.env.ADMIN_SESSION_PASSWORD : process.env.SESSION_PASSWORD,
    cookieName: isAdmin ? process.env.ADMIN_SESSION_NAME : process.env.SESSION_NAME
  })
}

export async function getPageSession (isAdmin = false) {
  return await getIronSession(cookies(), {
    password: isAdmin ? process.env.ADMIN_SESSION_PASSWORD : process.env.SESSION_PASSWORD,
    cookieName: isAdmin ? process.env.ADMIN_SESSION_NAME : process.env.SESSION_NAME
  })
}
