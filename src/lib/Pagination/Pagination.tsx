import React from 'react';
import { UsePaginationInstanceProps, UsePaginationState } from 'react-table'

interface Props<T extends object> extends UsePaginationInstanceProps<T>{
  state: UsePaginationState<T>
  theme?: 'dark' | 'light'
}

export function Pagination<T extends object>({
  nextPage,
  previousPage,
  gotoPage,
  canNextPage,
  canPreviousPage,
  pageCount,
  state,
  pageOptions,
  setPageSize,
  theme = 'light'
}: Props<T>) {
  const { pageIndex, pageSize } = state

  const isDark = theme === 'dark'

  const stylesBtn = `cursor-pointer text-sm font-bold py-2 px-4 rounded focus:outline-none ${isDark ? 'text-zinc-900 bg-zinc-500 hover:bg-zinc-700 hover:text-zinc-100' : 'text-zinc-100 bg-zinc-500 hover:bg-zinc-400 hover:text-zinc-900'}`

  return (
    <div className={`flex flex-col sm:flex-row justify-center gap-2 items-center rounded-b-lg p-2 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`}>
      <div className="flex justify-center items-center space-x-4">
        <button
          className={stylesBtn}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>
        <button
          className={stylesBtn}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>
        <button
          className={stylesBtn}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>
        <button
          className={stylesBtn}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>
      </div>
      <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
        <span className={`text-sm ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            className="text-sm py-2 px-2 rounded-lg border border-zinc-300 text-center text-zinc-900 w-16 sm:w-24"
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
          className="cursor-pointer text-sm py-2 px-2 border border-zinc-300 rounded-lg w-24 sm:w-32"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <span className={`text-sm mt-2 sm:mt-0 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
    </div>
  )
}
