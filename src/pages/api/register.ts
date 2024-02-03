import mongodb from '@/libs/mongodb'
import { hashPassword } from '@/utils/password'
import { normalizeDoc } from '@/utils/data'

export default async function (req, res) {
  const data = {
    ...normalizeDoc(req.body),
    password: await hashPassword(req.body.password)
  }

  const result = await mongodb.db().collection('users').insertOne({ ...data })

  res.json({ result })
}
