import React, { ReactNode } from 'react'
import { Row, Cell, TableInstance } from 'react-table'

export type FormatterFn<T> = (
  value: any,
  column?: string,
  data?: T,
) => ReactNode

interface Props<T extends object> extends TableInstance<T> {
  page: any
  formatterColumnFn?: FormatterFn<T>
  theme?: 'dark' | 'light'
  children?: ReactNode
}

interface TRProps<T extends object> extends Row<T> {
  data: T
  formatterFn: FormatterFn<T>
  theme?: 'dark' | 'light'
}

interface TDProps<T extends object> extends Cell<T> {
  data: T
  formatterFn: FormatterFn<T>
}

function textAlign(column: string | undefined) {
  if (column === 'Devedor') {
    return 'text-left'
  }

  if (column === 'Valor') {
    return 'text-right'
  }

  return 'text-center'
}

function TD<T extends object>({
  data,
  column,
  getCellProps,
  value,
  render,
  formatterFn,
}: TDProps<T>) {
  const columnName = column.render('Header')?.toString()
  return (
    <td className={textAlign(columnName)} {...getCellProps} key={column.id}>
      {formatterFn(value, columnName, data)}
    </td>
  )
}

function TR<T extends object>({
  getRowProps,
  id,
  cells,
  index,
  data,
  formatterFn,
  theme
}: TRProps<T>) {
  return (
    <tr className={theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'} {...getRowProps} key={id}>
      {cells.map((cell) => {
        return (
          <TD<T>
            {...cell}
            data={data}
            formatterFn={formatterFn}
            key={`${id}${cell.column.id}`}
          />
        )
      })}
    </tr>
  )
}

export function TableBody<T extends object>({
  page,
  getTableBodyProps,
  prepareRow,
  data,
  formatterColumnFn = (value) => value,
  theme = 'light'
}: Props<T>) {
  return (
    <tbody
      className={`${theme === 'dark' ? 'bg-zinc-700 divide-zinc-900' : 'bg-zinc-400 divide-zinc-300'} divide-y divide-zinc-900`}
      {...getTableBodyProps}
    >
      {page.map((row: Row<T>) => {
        prepareRow(row)
        return (
          <TR<T>
            data={data[row.index]}
            {...row}
            key={row.id}
            formatterFn={formatterColumnFn}
            theme={theme}
          />
        )
      })}
    </tbody>
  )
}
