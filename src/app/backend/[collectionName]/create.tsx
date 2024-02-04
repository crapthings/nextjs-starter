import { createPortal } from 'react-dom'
import { useParams, usePathname, useRouter } from 'next/navigation'

import { getFeature, getFields } from '@/stores/app'
import Dialog from './dialog'
import Form from './form'

export default function Create () {
  const router = useRouter()

  const pathname = usePathname()

  const { collectionName } = useParams()

  const feature = getFeature(collectionName)

  const fields = getFields(collectionName)

  const handleClose = () => {
    router.push(pathname)
  }

  const handleSubmit = (data) => {
    console.log(data)
  }

  return createPortal((
    <Dialog onClose={handleClose}>
      <div className='w-[640px] p-8 space-y-8 rounded-md bg-white shadow'>
        <div className='font-semibold text-xl'>新增{feature.label}</div>
        <Form fields={fields} onClose={handleClose} onSubmit={handleSubmit} />
      </div>
    </Dialog>
  ), document.body)
}
