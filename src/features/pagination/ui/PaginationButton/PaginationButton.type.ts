import {ReactNode} from "react";

export type ButtonTarget = number | 'next' | 'previous' | 'last';

export type PaginationButtonType = {
    target: ButtonTarget,
    currentPage: number,
    label: string,
    clickHandler: (page?:ButtonTarget) => void,
    children: ReactNode[] | ReactNode | string | null
}
