import { useForm } from 'react-hook-form'

import InputReslover from '@/components/inputs'

export default function Form (props) {
  const { register, getValues, setValue, handleSubmit } = useForm({
    defaultValues: props.defaultValues
  })

  return (
    <form onSubmit={handleSubmit(props.onSubmit)} className='space-y-8'>
      <div className='space-y-4'>
        {_.map(props.fields, InputReslover({ ...props, register, getValues, setValue }))}
      </div>

      <div className='sticky bottom-8 flex justify-end gap-4'>
        <button onClick={props.onClose} type='button' className='w-20 h-10 rounded bg-zinc-500 text-zinc-50'>关闭</button>
        <button type='submit' className='w-20 h-10 rounded bg-blue-500 text-blue-50'>提交</button>
      </div>
    </form>
  )
}
