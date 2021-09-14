import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0), #00000020),
    url(${({ theme }) => theme.images.hero});
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  background-position: right;
  background-size: cover;

  height: 100vh;
`;
