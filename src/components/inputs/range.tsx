// https://toughengineer.github.io/demo/slider-styler/slider-styler.html

import { useState } from 'react'

export default (props) => (field, fieldName) => {
  const [value, setValue] = useState()

  const { register, getValues } = props

  return (
    <div key={fieldName} className='space-y-1'>
      <label htmlFor={`field-${fieldName}`} className='block text-black/50'>{field.label}</label>

      <div className='space-y-2 bg-zinc-100'>
        <div className='text-center'>{value}</div>

        <input
          type='range'
          {...register(fieldName, {
            valueAsNumber: field.valueAsNumber,
            onChange: (e) => setValue(e.target.value)
          })}
          id={`field-${fieldName}`}
          className='appearance-none block w-full rounded bg-transparent [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500'
        />
      </div>
    </div>
  )
}
