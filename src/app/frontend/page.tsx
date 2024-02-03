import Link from 'next/link'

export default async function Page () {
  return (
    <div>
      <div>frontend page</div>

      <div className='flex flex-col'>
        <Link href='/backend'>Backend</Link>
        <Link href='/frontend/logout'>Logout</Link>
      </div>
    </div>
  )
}
