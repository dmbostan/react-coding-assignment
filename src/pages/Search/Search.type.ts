import { ArticleType } from '@shared/types/Article.type.ts';

export type AxiosResponseType = {
  data: {
    items: ArticleType[];
  };
  status: number;
  statusText: string;
  headers: unknown;
  config: unknown;
  request: unknown;
};
