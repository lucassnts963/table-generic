import { TableInstance } from 'react-table';
interface Props<D extends object> extends TableInstance<D> {
    theme: 'dark' | 'light';
}
export declare function TableHeader<D extends object>({ headerGroups, theme }: Props<D>): JSX.Element;
export {};
