import mongodb from '@/libs/mongodb'
import { normalizeDoc } from '@/utils/api'

export default async function (req, res) {
  const { collectionName } = req.query

  const { ...body } = req.body

  const data = normalizeDoc(body)

  const result = await mongodb.db().collection(collectionName).insertOne({ ...data })

  res.json({
    success: true,
    result
  })
}
