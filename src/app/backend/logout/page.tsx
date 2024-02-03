'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useLogout } from '@/hooks/api'

export default async function LogoutPage () {
  const router = useRouter()

  const logout = useLogout('/admin/logout')

  useEffect(() => {
    logout.trigger(null, {
      onSuccess () {
        router.push('/backend')
      }
    })
  }, [])

  return null
}
