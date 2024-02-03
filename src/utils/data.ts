import _ from 'lodash'
import { nanoid } from 'nanoid'

export const normalizeDoc = (data) => {
  return {
    ...data,
    _id: nanoid(24),
    createdAt: new Date()
  }
}
