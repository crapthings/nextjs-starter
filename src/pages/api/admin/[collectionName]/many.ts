import mongodb from '@/libs/mongodb'

export default async function (req, res) {
  const limit = 5

  const { collectionName, page } = req.query

  const result = await mongodb.db().collection(collectionName).find().limit(limit).skip(page * limit).toArray()

  const total = await mongodb.db().collection(collectionName).countDocuments()

  res.json({
    success: true,
    result,
    total,
    limit,
  })
}
