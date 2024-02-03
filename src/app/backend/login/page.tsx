'use client'

import { useForm } from 'react-hook-form'

import { useLogin } from '@/hooks/api'

export default function LoginPage () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const login = useLogin('/admin/login')

  const handleLogin = ({ username, password }) => {
    login.trigger({ username, password })
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
