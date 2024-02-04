import _ from 'lodash'

import Pagination from './pagination'

export default function Table ({ columnDefs, total, limit, rows }) {
  return (
    <div className='overflow-x-auto space-y-2'>
      <table className='table-auto w-full'>
        <thead className='bg-zinc-100 font-semibold text-black/50'>
          <tr>
            {_.map(columnDefs, (column, fieldName) => (
              <td key={fieldName} className='p-1 whitespace-nowrap'>{_.get(column, 'label')}</td>
            ))}
          </tr>
        </thead>

        <tbody className='divide-y divide-zinc-200'>
          {rows.map((item) => (
            <tr key={item._id}>
              {_.map(columnDefs, Cell(item))}
            </tr>
          ))}
        </tbody>
      </table>

      {total > rows.length ? <Pagination total={total} limit={limit} /> : null}
    </div>
  )
}

const Cell = (item) => (column, fieldName) => {
  const value = _.get(item, fieldName)

  const render = (value) => column.render ? column.render({ value }) : value

  return (
    <td key={fieldName} className='p-1 whitespace-nowrap'>{render(value)}</td>
  )
}
