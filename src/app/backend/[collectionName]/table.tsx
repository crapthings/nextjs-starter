import _ from 'lodash'

export default function Table ({ columnDefs, data }) {
  return (
    <div className='overflow-x-auto'>
      <table className='table-auto w-full'>
        <thead className='bg-zinc-100 font-semibold text-black/50'>
          <tr>
            {_.map(columnDefs, (column, fieldName) => (
              <td key={fieldName} className='p-1 whitespace-nowrap'>{_.get(column, 'label')}</td>
            ))}
          </tr>
        </thead>

        <tbody className='divide-y divide-zinc-200'>
          {data.map((item) => (
            <tr key={item._id}>
              {_.map(columnDefs, Cell(item))}
            </tr>
          ))}
        </tbody>
      </table>
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
