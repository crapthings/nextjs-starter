'use client'

import { useParams, useSearchParams } from 'next/navigation'

import { getFeature, getColumnDefs } from '@/stores/app'
import { useMany } from '@/hooks/api'
import Action from './action'
import Table from './table'

export default function Page () {
  const { collectionName } = useParams()

  const searchParams = useSearchParams()

  const { data, isLoading } = useMany(`/admin/${collectionName}/many?${searchParams.toString()}`)

  if (isLoading) {
    return null
  }

  const columnDefs = getColumnDefs(collectionName)

  return (
    <div className='p-6 py-8 rounded-md bg-white'>
      <Action />
      <Table columnDefs={columnDefs} total={data.total} limit={data.limit} rows={data.result} />
    </div>
  )
}
