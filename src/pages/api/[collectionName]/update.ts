import mongodb from '@/libs/mongodb'

export default async function (req, res) {
  const { collectionName } = req.query

  const { _id, ...body } = req.body

  const data = {
    ...body,
    updatedAt: new Date(),
  }

  const result = await mongodb.db().collection(collectionName).updateOne({ _id }, { $set: { ...data } })

  res.json({
    success: true,
    result
  })
}
