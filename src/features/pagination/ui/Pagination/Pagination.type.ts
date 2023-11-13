import { ArticleType } from '@shared/types/Article.type.ts';

export type PaginationType = {
  items: ArticleType[][];
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
