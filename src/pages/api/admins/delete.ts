import { admins } from '@/libs/mongodb'

export default async function (req, res) {
  const result = await admins.deleteOne({ _id: req.body._id })
  res.json({ result })
}
