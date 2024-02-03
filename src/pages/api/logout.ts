import { getSession } from '@/utils/session'

export default async function (req, res) {
  const session = await getSession(req, res)
  session.destroy()
  res.json({ success: true })
}
