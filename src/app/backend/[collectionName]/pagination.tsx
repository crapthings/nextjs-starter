import _ from 'lodash'
import classNames from 'classnames'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination ({ columnDefs, total, limit, rows }) {
  const router = useRouter()

  const pathname = usePathname()

  const searchParams = useSearchParams()

  const getActiveCls = (targetPage, currentPage) => classNames({
    '!bg-green-500 !text-green-50': targetPage == currentPage,
  }, 'size-8 rounded-md bg-black/10')

  const handlePage = (page) => () => {
    const query = new URLSearchParams(searchParams.toString())
    query.set('page', page)
    router.push(pathname + '?' + query.toString())
  }

  return (
    <div className='flex gap-2'>
      {_.times(total / limit, (n) => (
        <button key={n} onClick={handlePage(n + 1)} className={getActiveCls(n + 1, searchParams.get('page'))}>{n + 1}</button>
      ))}
    </div>
  )
}
