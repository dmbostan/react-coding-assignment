import {ArticleTypes} from "@shared/types/Article.types.ts";

export type PaginationTypes = {
    items: ArticleTypes[],
    currentPage: number,
    setCurrentPage: (page:number) => void
}
