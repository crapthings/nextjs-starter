import { useForm } from 'react-hook-form'

import InputReslover from '@/components/inputs'

export default function Form (props) {
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: props.defaultValues
  })

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className='space-y-8'>
      <div className='space-y-4'>
        {_.map(props.fields, InputReslover({ ...props, register, setValue }))}
      </div>

      <div className='flex justify-end gap-4'>
        <button onClick={props.onClose} type='button' className='w-20 h-10 rounded bg-zinc-500 text-zinc-100'>关闭</button>
        <button type='submit' className='w-20 h-10 rounded bg-blue-500 text-blue-100'>提交</button>
      </div>
    </form>
  )
}
