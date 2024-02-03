import { administrators } from '@/libs/mongodb'

export default async function (req, res) {
  const result = await administrators.updateOne({ _id: req.body._id }, { $set: { isDeleted: true } })
  res.json({ result })
}
