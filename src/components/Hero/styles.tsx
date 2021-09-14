import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 2rem;

  margin: 1rem 0;
`;

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;

  padding: 0 2rem;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  max-height: 100%;
  width: 650px;

  color: #ffffff;
  font-weight: bold;
  line-height: 1;
  padding: 0 2rem;
  text-transform: uppercase;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
