import { UsePaginationInstanceProps, UsePaginationState } from 'react-table';
interface Props<T extends object> extends UsePaginationInstanceProps<T> {
    state: UsePaginationState<T>;
    theme?: 'dark' | 'light';
}
export declare function Pagination<T extends object>({ nextPage, previousPage, gotoPage, canNextPage, canPreviousPage, pageCount, state, pageOptions, setPageSize, theme }: Props<T>): JSX.Element;
export {};
