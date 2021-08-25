import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

interface StyledButtonProps extends Omit<ButtonProps, 'label'> {
  readonly bgColor: string;
  readonly color: string;
  readonly hoverBgColor: string;
  readonly hoverColor: string;
  readonly round: boolean;
  readonly outlined: boolean;
  readonly size: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  // option #1
  background-color: ${props =>
    props.outlined ? 'transparent' : props.theme.colors.buttonBackgroundColor};

  // option #2
  border: ${({ theme }) => `2px solid ${theme.colors.buttonBackgroundColor}`};
  color: ${({ outlined, theme }) =>
    outlined ? theme.colors.buttonBackgroundColor : theme.colors.buttonColor};

  border-radius: ${({ theme }) => (theme.design.buttonRound ? '40px' : '4px')};
  box-shadow: ${({ theme }) => theme.design.shadow};
  font-size: 15px;
  padding: 0.75rem 4rem;
  text-transform: uppercase;
  transition: 0.2s ease-out;

  width: ${({ size }) =>
    size === 'small' ? '120px' : size === 'medium' ? '240px' : '100%'};

  // option #3
  /* background-color: ${({ bgColor }) => bgColor};
  border: none;
  color: color;

  ${({ bgColor, outlined }) =>
    outlined &&
    css`
      background-color: transparent;
      border: 2px solid ${bgColor};
    `}; */

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundHoverColor};
    border: ${({ theme }) =>
      `2px solid ${theme.colors.buttonBackgroundHoverColor}`};
    box-shadow: ${({ theme }) => theme.design.hoverShadow};
    color: ${({ theme }) => theme.colors.buttonHoverColor};
    cursor: pointer;
    transition: 0.2s ease-out;
  }
`;
