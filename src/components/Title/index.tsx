import { StyledTitle } from './styles';

import { TitleProps } from './types';

export const Title = (props: TitleProps): JSX.Element => {
  const {
    as = 'p',
    children,
    color = '',
    size = 'medium',
    uppercase = false,
  } = props;
  return (
    <StyledTitle as={as} color={color} size={size} uppercase={uppercase}>
      {children}
    </StyledTitle>
  );
};
