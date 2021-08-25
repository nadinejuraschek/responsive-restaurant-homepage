import { ReactNode } from 'react';

type TextAllowedAsValues = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface TextProps {
  as?: TextAllowedAsValues;
  children: string | ReactNode;
  color?: string;
  isBold?: boolean;
  size?: string;
}
