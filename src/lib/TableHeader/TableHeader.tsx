import React from 'react'
import { TableInstance, HeaderGroup } from 'react-table'

interface Props<D extends object> extends TableInstance<D> {
  theme: 'dark' | 'light'
}

export function TableHeader<D extends object>({ headerGroups, theme }: Props<D>) {
  const isDark = theme === 'dark'

  return (
    <thead className={isDark ? 'bg-zinc-800' : 'bg-zinc-300'}>
      {headerGroups.map((headerGroup: HeaderGroup<D>) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
          {headerGroup.headers.map((column) => (
            <th
              className={`px-6 py-3 text-center text-xs font-medium uppercase tracking-wider ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}
              {...column.getHeaderProps()}
              key={column.id}
            >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
