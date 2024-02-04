'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import Create from './create'

export default function Page () {
  const router = useRouter()
  const pathname  = usePathname()
  const action = useSearchParams().get('action')

  const isCreate = action === 'create'

  return (
    <>
      <div>
        <button onClick={() => router.push(pathname + '?action=create')} className='bg-green-500'>新增</button>
      </div>

      {isCreate ? <Create /> : null}
    </>
  )
}
