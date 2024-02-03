import _ from 'lodash'
import { nanoid } from 'nanoid'

export const normalizeDoc = (data) => {
  return {
    ...data,
    _id: nanoid(24),
    createdAt: new Date(),
    isDeleted: false,
  }
}

export const errorHandler = (fn) => async (req, res) => {
  try {
    await fn(req, res)
  } catch (ex) {
    if (ex.code === 11000) {
      console.error(ex)
      return res.status(409).json({ success: false, error: 'User already exists' })
    }

    console.log(ex)

    const statusCode = ex.statusCode || 500
    const message = ex.message || 'An error occurred'

    res.status(statusCode).json({ success: false, error: message })
  }
}
