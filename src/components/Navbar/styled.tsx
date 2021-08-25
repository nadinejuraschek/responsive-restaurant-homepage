import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;

  cursor: pointer;
  height: 80%;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;
