import formidable from 'formidable'

import { files } from '@/libs/mongodb'
import { errorHandler, normalizeDoc } from '@/utils/api'


export default async function (req, res) {
  const form = formidable({
    createDirsFromUploads: true,
    uploadDir: process.env.UPLOAD_DIR,
  })

  const [fields, uploads] = await form.parse(req)

  const result = await files.insertMany(uploads.files.map((file) => normalizeDoc({
    lastModifiedDate: file.lastModifiedDate,
    filepath: file.filepath,
    newFilename: file.newFilename,
    originalFilename: file.originalFilename,
    mimetype: file.mimetype,
    size: file.size,
  })))

  res.json({ success: true, result })
}

export const config = {
  api: {
    bodyParser: false,
  },
}
