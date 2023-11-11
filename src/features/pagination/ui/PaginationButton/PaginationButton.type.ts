import {ReactNode} from "react";

export type ButtonTarget = number | 'next' | 'previous' | 'last';

export type PaginationButtonTypes = {
    target: ButtonTarget,
    currentPage: number,
    label: string,
    clickHandler: (page?:ButtonTarget) => void,
    children: ReactNode[] | ReactNode | null
}
