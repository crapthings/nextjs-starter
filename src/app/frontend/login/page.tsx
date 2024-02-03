'use client'

import { useForm } from 'react-hook-form'

import { login } from '@/hooks/api'

export default function LoginPage () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleLogin = (data) => {
    console.log(data)
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
