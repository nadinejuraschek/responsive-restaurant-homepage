import { StyledText } from './styles';
import { TextProps } from './types';

export const Text = (props: TextProps): JSX.Element => {
  const {
    as = 'p',
    children,
    color = '',
    isBold = false,
    size = '14px',
  } = props;
  return (
    <StyledText as={as} color={color} isBold={isBold} size={size}>
      {children}
    </StyledText>
  );
};
