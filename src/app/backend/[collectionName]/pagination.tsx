import _ from 'lodash'
import classNames from 'classnames'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Icon from '@mdi/react'
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight
} from '@mdi/js'

export default function Pagination ({ columnDefs, total, limit, rows }) {
  const router = useRouter()

  const pathname = usePathname()

  const searchParams = useSearchParams()

  const currentPage = parseInt(searchParams.get('page'))

  const totalPage = Math.floor(total / limit)

  const getActiveCls = (targetPage, currentPage) => classNames({
    '!bg-green-500 !text-green-50': targetPage == currentPage
  }, 'size-8 rounded-md bg-black/10')

  const handlePage = (page) => () => {
    const query = new URLSearchParams(searchParams.toString())
    query.set('page', _.clamp(page, 1, totalPage))
    router.push(pathname + '?' + query.toString())
  }

  return (
    <div className='flex gap-2'>
      <button onClick={handlePage(1)} className='flex justify-center items-center size-8 rounded-md bg-black/10'>
        <Icon path={mdiChevronDoubleLeft} size={.7} />
      </button>

      <button onClick={handlePage(currentPage - 1)} className='flex justify-center items-center size-8 rounded-md bg-black/10'>
        <Icon path={mdiChevronLeft} size={.7} />
      </button>

      {getPageNumbers(currentPage, totalPage, 7).map((n) => (
        <button key={n} onClick={handlePage(n)} className={getActiveCls(n, currentPage)}>{n}</button>
      ))}

      <button onClick={handlePage(currentPage + 1)} className='flex justify-center items-center size-8 rounded-md bg-black/10'>
        <Icon path={mdiChevronRight} size={.7} />
      </button>

      <button onClick={handlePage(totalPage)} className='flex justify-center items-center size-8 rounded-md bg-black/10'>
        <Icon path={mdiChevronDoubleRight} size={.7} />
      </button>
    </div>
  )
}

function getPageNumbers (currentPage, totalPage, length = 5) {
  const left = Math.floor(length / 2)
  const right = Math.ceil(length / 2)

  if (currentPage - left < 1) {
    return _.range(1, length + 1)
  }

  if (currentPage + right >= totalPage) {
    totalPage += 1
    return _.range(totalPage - length, totalPage)
  }

  return _.range(currentPage - left, currentPage + right)
}
