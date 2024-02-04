export default function Dialog ({ children, onClose }) {
  return (
    <div className='fixed z-40 inset-0'>
      <div className='relative size-full'>
        <div onClick={onClose} className='absolute inset-0 bg-zinc-100/50 backdrop-blur-sm cursor-pointer'></div>

        <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
          <div className='pointer-events-auto'>{children}</div>
        </div>
      </div>
    </div>
  )
}
