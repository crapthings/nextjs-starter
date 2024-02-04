import _ from 'lodash'
import classNames from 'classnames'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function Pagination ({ columnDefs, total, limit, rows }) {
  const router = useRouter()

  const pathname = usePathname()

  const searchParams = useSearchParams()

  const currentPage = parseInt(searchParams.get('page'))

  const getActiveCls = (targetPage, currentPage) => classNames({
    '!bg-green-500 !text-green-50': targetPage == currentPage
  }, 'size-8 rounded-md bg-black/10')

  const handlePage = (page) => () => {
    const query = new URLSearchParams(searchParams.toString())
    query.set('page', page)
    router.push(pathname + '?' + query.toString())
  }

  return (
    <div className='flex gap-2'>
      {getPageNumbers(currentPage, total / limit, 10).map((n) => (
        <button key={n} onClick={handlePage(n)} className={getActiveCls(n, currentPage)}>{n}</button>
      ))}
    </div>
  )
}

function getPageNumbers (currentPage, totalPage, length = 5) {
  totalPage = Math.ceil(totalPage)

  const left = Math.floor(length / 2)
  const right = Math.ceil(length / 2)

  if (currentPage - left < 1) {
    return _.range(1, 1 + length)
  }

  if (currentPage + right > totalPage) {
    return _.range(totalPage - length, totalPage)
  }

  return _.range(currentPage - left, currentPage + right)
}
