import { Column } from 'react-table';
import { FormatterFn } from '../TableBody';
interface Props<T extends object> {
    data: T[];
    columns: Column<T>[];
    formatterColumnFn?: FormatterFn<T>;
    theme?: 'dark' | 'light';
}
export declare function Table<T extends object>({ data, columns, formatterColumnFn, theme }: Props<T>): JSX.Element;
export {};
