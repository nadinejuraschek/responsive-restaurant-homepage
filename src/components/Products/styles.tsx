import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4rem;

  margin: 3rem 0 5rem;
`;
