'use client'

import { faker } from '@faker-js/faker'

export default function Page () {
  faker.seed(123)

  return (
    <div className='flex'>
      <div>aside</div>
      <div className='bg-red-900'>main</div>
    </div>
  )
}
