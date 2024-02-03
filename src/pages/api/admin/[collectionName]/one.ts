import mongodb from '@/libs/mongodb'

export default async function (req, res) {
  const { collectionName } = req.query

  const { _id } = req.body

  const result = await mongodb.db().collection(collectionName).findOne({ _id })

  res.json({
    success: true,
    result
  })
}
