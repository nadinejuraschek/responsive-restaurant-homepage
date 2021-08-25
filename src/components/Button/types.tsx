import { ReactNode } from 'react';

export interface ButtonProps {
  bgColor?: string;
  children: string | ReactNode;
  color?: string;
  hoverBgColor?: string;
  hoverColor?: string;
  round?: boolean;
  outlined?: boolean;
  size?: string;
}
