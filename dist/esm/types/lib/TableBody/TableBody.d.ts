import { ReactNode } from 'react';
import { TableInstance } from 'react-table';
export type FormatterFn<T> = (value: any, column?: string, data?: T) => ReactNode;
interface Props<T extends object> extends TableInstance<T> {
    page: any;
    formatterColumnFn?: FormatterFn<T>;
    theme?: 'dark' | 'light';
    children?: ReactNode;
}
export declare function TableBody<T extends object>({ page, getTableBodyProps, prepareRow, data, formatterColumnFn, theme }: Props<T>): JSX.Element;
export {};
