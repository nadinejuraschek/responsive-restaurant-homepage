import { useContext } from 'react';
import { Body, Container, Image } from './styles';
import { CardProps } from './types';
import { Text } from '../Text';
import { ThemeContext } from 'styled-components';

export const Card = (props: CardProps): JSX.Element => {
  const { discount = false, image, name, price } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <Image image={image} />
      <Body>
        <Text>{name}</Text>
        <Text
          color={discount ? 'coral' : themeContext.colors.buttonBackgroundColor}
          isBold
        >
          {price}
        </Text>
      </Body>
    </Container>
  );
};
