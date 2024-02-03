import Link from 'next/link'

export default async function Page () {
  return (
    <div>
      <div>frontend page</div>
      <Link href='/frontend/logout'>Logout</Link>
    </div>
  )
}
