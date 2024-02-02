import { useOne } from '@/hooks/data-provider'

export default function Item () {
  const { data } = useOne('/one')

  return (
    <div>{JSON.stringify(data)}</div>
  )
}
