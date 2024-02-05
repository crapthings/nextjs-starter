export default (props) => (field, fieldName) => {
  const { register } = props

  return (
    <div key={fieldName} className='space-y-1'>
      <label htmlFor={`field-${fieldName}`} className='block text-black/50'>{field.label}</label>

      <input
        type='number'
        {...register(fieldName, { valueAsNumber: true })}
        id={`field-${fieldName}`}
        className='w-full p-2 rounded bg-zinc-100 outline-none'
      />
    </div>
  )
}
