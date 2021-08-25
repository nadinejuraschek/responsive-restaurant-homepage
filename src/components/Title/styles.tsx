import styled from 'styled-components';
import { TitleProps } from './types';

interface StyledTitleProps extends TitleProps {}

export const StyledTitle = styled.h1<StyledTitleProps>`
  color: ${({ color, theme }) =>
    color !== '' ? color : theme.colors.titleColor};

  font-family: ${({ theme }) => theme.fonts.titleFont};
  font-size: clamp(
    ${({ size }) =>
      size === 'small'
        ? '1.75rem, 10vw, 3rem'
        : size === 'medium'
        ? '2.5rem, 10vw, 5rem'
        : '3rem, 10vw, 6rem'}
  );
  font-weight: bold;

  margin: 1rem 0;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
