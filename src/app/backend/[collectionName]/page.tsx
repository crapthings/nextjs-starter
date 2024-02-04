'use client'

import { useParams } from 'next/navigation'

import { featuresMap } from '@/stores/app'
import { useMany } from '@/hooks/api'
import Table from './table'

export default function Page () {
  const { collectionName } = useParams()

  const { data, isLoading } = useMany(`/admin/${collectionName}/many`)

  if (isLoading) {
    return null
  }

  const columnDefs = featuresMap.get(collectionName)

  return (
    <div className='p-6 py-8 rounded-md bg-white'>
      <Table columnDefs={columnDefs} data={data.result} />
    </div>
  )
}
