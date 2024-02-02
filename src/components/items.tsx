import { useMany } from '@/hooks/data-provider'

export default function Items () {
  const { data } = useMany('/many')

  return (
    <div>{JSON.stringify(data)}</div>
  )
}
