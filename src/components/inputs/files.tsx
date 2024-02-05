import _ from 'lodash'
import { useRef, useState } from 'react'

import { useUpload } from '@/hooks/api'

export default (props) => (field, fieldName) => {
  const cache = useRef(new Map)

  const inputRef = useRef()

  const [info, setInfo] = useState([])

  const upload = useUpload()

  const { register, getValues, setValue } = props

  const onChange = (evt) => {
    const formData = new FormData()

    for (const file of evt.target.files) {
      formData.append('files', file)
    }

    upload.trigger(formData, {
      onSuccess (data) {
        const ids = getValues(fieldName) || []

        console.log(ids)

        for (const file of data.result) {
          cache.current.set(file._id, file)
          ids.push(file._id)
        }

        setValue(fieldName, ids)
        setInfo(ids)
      }
    })
  }

  const onRemove = (id) => {
    const ids = _.without(getValues(fieldName), id)
    setValue(fieldName, ids)
    setInfo(ids)
  }

  return (
    <div key={fieldName} className='space-y-1'>
      <div className='flex justify-between text-black/50'>
        <div>{field.label} {info.length ? info.length + ' files' : null}</div>
        <button type='button' disabled={upload.isMutating} onClick={() => inputRef.current.click()} className='p-1 px-2 rounded bg-blue-500 disabled:bg-zinc-500 text-xs text-blue-50 disabled:text-zinc-50'>添加文件</button>
      </div>

      <div className='overflow-y-scroll overscroll-contain block h-48 p-2 rounded bg-zinc-100'>
        {info.length ? (
          <div className='grid grid-cols-2 gap-2'>
            {info.map((id) => (
              <div key={id} className='flex justify-between gap-2 p-2 rounded bg-zinc-200'>
                <div>{cache.current.get(id).originalFilename}</div>
                <button type='button' onClick={() => onRemove(id)} className='flex-none size-6 rounded-full bg-blue-500 text-blue-50'>X</button>
              </div>
            ))}
          </div>
        ) : (
          <div
            onClick={() => inputRef.current.click()}
            className='flex justify-center items-center size-full text-xs text-black/20 cursor-pointer'
          >还未选择文件</div>
        )}
      </div>

      <input
        ref={inputRef}
        type='file'
        multiple={true}
        onChange={onChange}
        className='hidden'
      />
    </div>
  )
}
