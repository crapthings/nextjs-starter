'use client'

import { faker } from '@faker-js/faker'

import { useAppState } from '@/stores/app'

faker.seed(123)

export default function Page () {
  const title = useAppState((state) => state.title)

  return (
    <div>
      <div>{title}</div>
      <div>{faker.lorem.sentence()}</div>
    </div>
  )
}
