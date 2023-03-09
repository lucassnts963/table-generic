import { UsePaginationInstanceProps, UsePaginationState, TableInstance, Column } from 'react-table';
import { ReactNode } from 'react';

interface Props$3<T extends object> extends UsePaginationInstanceProps<T> {
    state: UsePaginationState<T>;
    theme?: 'dark' | 'light';
}
declare function Pagination<T extends object>({ nextPage, previousPage, gotoPage, canNextPage, canPreviousPage, pageCount, state, pageOptions, setPageSize, theme }: Props$3<T>): JSX.Element;

type FormatterFn<T> = (value: any, column?: string, data?: T) => ReactNode;
interface Props$2<T extends object> extends TableInstance<T> {
    page: any;
    formatterColumnFn?: FormatterFn<T>;
    theme?: 'dark' | 'light';
    children?: ReactNode;
}
declare function TableBody<T extends object>({ page, getTableBodyProps, prepareRow, data, formatterColumnFn, theme }: Props$2<T>): JSX.Element;

interface Props$1<T extends object> {
    data: T[];
    columns: Column<T>[];
    formatterColumnFn?: FormatterFn<T>;
    theme?: 'dark' | 'light';
}
declare function Table<T extends object>({ data, columns, formatterColumnFn, theme }: Props$1<T>): JSX.Element;

interface Props<D extends object> extends TableInstance<D> {
    theme: 'dark' | 'light';
}
declare function TableHeader<D extends object>({ headerGroups, theme }: Props<D>): JSX.Element;

export { Pagination, Table, TableBody, TableHeader };
