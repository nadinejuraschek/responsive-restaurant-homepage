import { ReactNode } from 'react';

type TitleAllowedAsValues = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface TitleProps {
  as?: TitleAllowedAsValues;
  children: string | ReactNode;
  color?: string;
  size?: string;
  uppercase?: boolean;
}
