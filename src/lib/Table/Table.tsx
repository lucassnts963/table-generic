import React from 'react'
import { Column, useTable, usePagination } from 'react-table'
import { Pagination } from '../Pagination'
import { TableBody, FormatterFn } from '../TableBody'
import { TableHeader } from '../TableHeader'

interface Props<T extends object> {
  data: T[]
  columns: Column<T>[]
  formatterColumnFn?: FormatterFn<T>
  theme?: 'dark' | 'light'
}

export function Table<T extends object>({
  data,
  columns,
  formatterColumnFn,
  theme = 'dark'
}: Props<T>) {

  const tableInstance = useTable<T>(
    {
      data,
      columns,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
        hiddenColumns: [],
      },
    },
    usePagination,
  )

  const {
    getTableProps,
    pageOptions,
    page,
    state,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
  } = tableInstance

  return (
    <div className="container">
      <div className="container overflow-x-auto border-collapse rounded-t-lg">
        <table className="w-full table-auto" {...getTableProps}>
          <TableHeader<T> {...tableInstance} theme={theme}/>
          <TableBody
            {...tableInstance}
            formatterColumnFn={formatterColumnFn}
            theme={theme}
          />
        </table>
      </div>
      <Pagination
        page={page}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        previousPage={previousPage}
        gotoPage={gotoPage}
        pageCount={pageCount}
        state={state}
        pageOptions={pageOptions}
        setPageSize={setPageSize}
        theme={theme}
      />
    </div>
  )
}
