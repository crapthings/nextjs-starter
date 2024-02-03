import mongodb from '@/libs/mongodb'
import { normalizeDoc } from '@/utils/data'

export default async function (req, res) {
  const { collectionName } = req.query
  const data = normalizeDoc(req.body)
  const result = await mongodb.db().collection(collectionName).insertOne({ ...data })
  res.json({ result })
}
