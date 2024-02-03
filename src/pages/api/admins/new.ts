import { admins } from '@/libs/mongodb'
import { normalizeDoc } from '@/utils/data'

export default async function (req, res) {
  const data = normalizeDoc(req.body)
  const result = await admins.insertOne({ ...data })
  res.json({ result })
}
