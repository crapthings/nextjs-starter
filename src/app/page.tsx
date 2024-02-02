'use client'

import { faker } from '@faker-js/faker'

import Item from '@/components/item'
import Items from '@/components/items'
import { useAppState } from '@/stores/app'

export default function Page () {
  faker.seed(123)

  const title = useAppState((state) => state.title)

  return (
    <div>
      <div>{title}</div>
      <div>{faker.lorem.sentence()}</div>

      <Item />
      <Items />
    </div>
  )
}
