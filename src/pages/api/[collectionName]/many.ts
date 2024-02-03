import mongodb from '@/libs/mongodb'

export default async function (req, res) {
  const { collectionName } = req.query

  const result = await mongodb.db().collection(collectionName).find().toArray()

  res.json({
    success: true,
    result
  })
}
