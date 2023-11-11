import { ReactNode } from 'react';

export type ButtonTypes = {
  clickHandler: () => void;
  className?: string;
  children: string | ReactNode | ReactNode[] | null;
};
