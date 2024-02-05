import _ from 'lodash'

export default (props) => (field, fieldName) => {
  const { register, setValue } = props

  const options = _.get(field, 'options', [])

  return (
    <div key={fieldName} className='space-y-2'>
      <label className='block text-black/50'>{field.label}</label>

      <div className='flex gap-4'>
        {options.map((option, optionIdx) => (
          <label key={optionIdx} className='flex items-center gap-1'>
            <input
              type='radio'
              name={fieldName}
              value={option.value}
              {...register(fieldName)}
              className='appearance-none flex justify-center items-center size-4 rounded-full bg-zinc-100 checked:bg-blue-500 text-xs checked:text-blue-50 transition-colors checked:after:content-[_"✓"]'
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
