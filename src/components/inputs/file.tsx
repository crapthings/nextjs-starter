import { useState } from 'react'

import { useUpload } from '@/hooks/api'

export default (props) => (field, fieldName) => {
  const [info, setInfo] = useState()

  const upload = useUpload()

  const { register, setValue } = props

  const onChange = (evt) => {
    const file = evt.target.files[0]
    const formData = new FormData()
    formData.append('files', file)
    upload.trigger(formData, {
      onSuccess (data) {
        setValue(fieldName, data.result.insertedIds[0])
        setInfo(file.name)
      }
    })
  }

  return (
    <div key={fieldName} className='space-y-1'>
      <label htmlFor={`field-${fieldName}`} className='block text-black/50'>{field.label}</label>

      <label className='flex justify-between items-center p-1 rounded bg-zinc-100 cursor-pointer'>
        {info ? (
          <div className='ml-1 text-xs cursor-default'>{info}</div>
        ) : (
          <div className='ml-1 text-black/20 text-xs cursor-default'>还未选择文件</div>
        )}

        <input
          type='file'
          {...register(fieldName, { onChange })}
          id={`field-${fieldName}`}
          className='hidden'
        />

        <button
          disabled={upload.isMutating}
          className='w-20 h-8 rounded bg-blue-500 disabled:bg-zinc-500 text-blue-50 disabled:text-zinc-50 pointer-events-none'
        >{upload.isMutating ? '上传中' : '选择文件'}</button>
      </label>
    </div>
  )
}
