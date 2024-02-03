'use client'

import { useForm } from 'react-hook-form'

import { useSign } from '@/hooks/api'
import { useRouter } from 'next/navigation'

export default function LoginPage () {
  const router = useRouter()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: 'admin123',
      password: 'admin123',
    }
  })

  const login = useSign('/admin/login')

  const handleLogin = ({ username, password }) => {
    login.trigger({ username, password }, {
      onSuccess () {
        router.push('/backend')
      }
    })
  }

  return (
    <div className='flex justify-center items-center min-h-dvh'>
      <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-4'>
        <input type='text' {...register('username')} />
        <input type='password' {...register('password')} />
        <input type='submit' value='login' />
      </form>
    </div>
  )
}
