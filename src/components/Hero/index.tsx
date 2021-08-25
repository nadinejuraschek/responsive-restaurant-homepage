import { ButtonWrapper, Content, Items } from './styles';

import { Button } from '../Button';
import { Title } from '../Title';

export const Hero = (): JSX.Element => {
  return (
    <Content>
      <Items>
        <Title as='h1' size='large' uppercase>
          This is a Title
        </Title>
        <Title as='h2' size='small'>
          Lorem ipsum text goes here
        </Title>
        <ButtonWrapper>
          <Button>View Menu</Button>
          <Button outlined>Book a Table</Button>
        </ButtonWrapper>
      </Items>
    </Content>
  );
};
