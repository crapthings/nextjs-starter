import Link from 'next/link'

export default async function Page () {
  return (
    <div>
      <div>backend page</div>

      <div className='flex flex-col'>
        <Link href='/frontend'>Frontend</Link>
        <Link href='/backend/logout'>Logout</Link>
      </div>
    </div>
  )
}
