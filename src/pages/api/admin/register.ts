import { administrators } from '@/libs/mongodb'
import { hashPassword } from '@/utils/password'
import { errorHandler, normalizeDoc } from '@/utils/api'

export default errorHandler(async function (req, res) {
  const { code, password, ...body } = req.body

  if (code !== process.env.ADMIN_REGISTER_CODE) {
    const err = new Error('Wrong code')
    err.statusCode = 401
    throw err
  }

  const data = {
    ...normalizeDoc(body),
    password: await hashPassword(password)
  }

  const result = await administrators.insertOne({ ...data })

  res.json({
    success: true,
    result
  })
})
