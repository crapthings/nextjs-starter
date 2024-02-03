import _ from 'lodash'

import { users } from '@/libs/mongodb'
import { hashPassword, comparePassword } from '@/utils/password'
import { getSession } from '@/utils/session'

export default async function (req, res) {
  const { username, password } = req.body

  const user = await users.findOne({ username })

  if (!user) {
    throw new Error('User not found')
  }

  const hashedPassword = await hashPassword(password)

  const isMatch = await comparePassword(password, hashedPassword)

  if (!isMatch) {
    throw new Error('Wrong password')
  }

  const session = await getSession(req, res)

  session.user = _.omit(user, ['password'])

  await session.save()

  res.json({ result: user })
}
