import styled from 'styled-components';
import { ImageProps } from './types';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.design.shadow};
  transition: ${({ theme }) => theme.design.transition};

  &:hover {
    box-shadow: ${({ theme }) => theme.design.hoverShadow};
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem;
`;

export const Image = styled.div<ImageProps>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 1rem 1rem 0 0;

  height: 150px;
  width: 100%;
`;
