import { StyledButton } from './styles';

import { ButtonProps } from './types';

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    bgColor = '#ffc500',
    children,
    color = '#333333',
    hoverBgColor = '#ffc500',
    hoverColor = '#333333',
    round = false,
    outlined = false,
    size = 'medium',
  } = props;

  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      hoverBgColor={hoverBgColor}
      hoverColor={hoverColor}
      round={round}
      outlined={outlined}
      size={size}
    >
      {children}
    </StyledButton>
  );
};
