import Link from 'next/link'

export default async function Page () {
  return (
    <div>
      <div>backend page</div>
      <Link href='/backend/logout'>Logout</Link>
    </div>
  )
}
