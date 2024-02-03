import _ from 'lodash'

import { administrators } from '@/libs/mongodb'
import { comparePassword } from '@/utils/password'
import { getSession } from '@/utils/session'
import { errorHandler } from '@/utils/api'

export default errorHandler(async function (req, res) {
  const { username, password } = req.body

  const foundUser = await administrators.findOne({ username })

  if (!foundUser) {
    const err = new Error('User not found')
    err.statusCode = 404
    throw err
  }

  const isMatch = await comparePassword(password, foundUser.password)

  if (!isMatch) {
    const err = new Error('Wrong password')
    err.statusCode = 401
    throw err
  }

  const session = await getSession(req, res, true)

  session.user = _.omit(foundUser, ['password'])

  await session.save()

  res.json({
    success: true,
    result: foundUser
  })
})
