import React, { FC, useMemo } from 'react'

interface ITableProps {
  data?: Record<string, any>[]
}

const Table: FC<ITableProps> = ({ data }) => {
  const headerRow = useMemo(() => {
    const item = data!.length ? data![0] : {}
    return Object.keys(item)
  }, [data])

  return (
    <div className="cv-table">
      <table>
        <thead>
          <tr>
            {headerRow.map((title, index) => (
              <td key={index}>
                <span>{title}</span>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data!.map((item, key) => {
            return (
              <tr key={key}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>
                    <span>{String(value)}</span>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Table.defaultProps = {
  data: [],
}

export default Table
