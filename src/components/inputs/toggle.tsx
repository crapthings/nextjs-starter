import _ from 'lodash'

export default (props) => (field, fieldName) => {
  const { register, setValue } = props

  const options = _.get(field, 'options', [])

  return (
    <div key={fieldName} className='space-y-2'>
      <label htmlFor={`field-${fieldName}`} className='block'>{field.label}</label>

      <label className='inline-block w-8 h-4 rounded bg-zinc-100'>
        <input
          type='checkbox'
          name={fieldName}
          {...register(fieldName)}
          id={`field-${fieldName}`}
          className='appearance-none inline-block size-4 rounded bg-zinc-500 checked:bg-blue-500 checked:translate-x-4 transition-all'
        />
      </label>
    </div>
  )
}
