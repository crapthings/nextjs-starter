export default (props) => (field, fieldName) => {
  const { register } = props

  return (
    <div key={fieldName} className='space-y-1'>
      <label htmlFor={`field-${fieldName}`} className='block'>{field.label}</label>

      <input
        type='password'
        autoComplete='new-password'
        {...register(fieldName)}
        id={`field-${fieldName}`}
        className='w-full p-2 rounded bg-zinc-100 outline-none'
      />
    </div>
  )
}