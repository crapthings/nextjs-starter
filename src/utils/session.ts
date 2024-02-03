import { getIronSession } from 'iron-session'

export async function getSession (req, res) {
  return await getIronSession(req, res, {
    password: process.env.SESSION_PASSWORD,
    cookieName: process.env.SESSION_NAME
  })
}
