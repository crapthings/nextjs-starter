import mongodb from '@/libs/mongodb'
import { hashPassword } from '@/utils/password'
import { errorHandler, normalizeDoc } from '@/utils/api'

export default errorHandler(async function (req, res) {
  const { password, ...body } = req.body

  const data = {
    ...normalizeDoc(body),
    password: await hashPassword(password)
  }

  const result = await mongodb.db().collection('users').insertOne({ ...data })

  res.json({
    success: true,
    result
  })
})
