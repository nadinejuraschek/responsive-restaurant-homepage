import { ReactNode, useContext } from 'react';
import { Container, Wrapper } from './styles';
import { ThemeContext } from 'styled-components';

import { productsData, ProductProps } from '../../data/products';
import { Card } from '../Card';
import { Title } from '../Title';

export const Products = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <Title color={themeContext.colors.buttonBackgroundColor}>
        Product Title
      </Title>
      <Wrapper>
        {productsData.map((product: ProductProps, index: number): ReactNode => {
          return (
            <Card
              key={index}
              discount={product.discount}
              image={product.img}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};
