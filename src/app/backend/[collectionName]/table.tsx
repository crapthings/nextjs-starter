import _ from 'lodash'

export default function Table ({ columnDefs, data }) {
  return (
    <table>
      <thead>
        <tr>
          {_.map(columnDefs, (column, fieldName) => (
            <td key={fieldName}>{_.get(column, 'label')}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {_.map(columnDefs, (column, fieldName) => (
              <td key={fieldName}>{_.get(item, fieldName)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
