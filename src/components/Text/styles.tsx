import styled from 'styled-components';
import { TextProps } from './types';

interface StyledTextProps extends TextProps {}

export const StyledText = styled.p<StyledTextProps>`
  color: ${({ color, theme }) =>
    color !== '' ? color : theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.textFont};
  font-size: ${({ size }) => size};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
`;
