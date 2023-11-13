import { ReactNode } from 'react';

export type ParagraphType = {
  className?: string;
  children: string | ReactNode | ReactNode[] | null;
};
