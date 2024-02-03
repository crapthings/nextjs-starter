import { nanoid } from 'nanoid'

import { administrators } from '@/libs/mongodb'
import { hashPassword } from '@/utils/password'
import { errorHandler, normalizeDoc } from '@/utils/api'

export default errorHandler(async function (req, res) {
  const { ...body } = req.body

  const password = nanoid(12)

  const data = {
    ...normalizeDoc(body),
    password: await hashPassword(password)
  }

  const result = await administrators.insertOne({ ...data })

  res.json({
    success: true,
    result: {
      ...result,
      yourPassword: password,
    }
  })
})
