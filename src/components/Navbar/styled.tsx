import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  cursor: pointer;
  font-size: 2rem;
  text-decoration: none;

  display: flex;
  align-items: center;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  color: #ffffff;
  cursor: pointer;

  display: block;

  position: absolute;
  top: 0;
  right: 0;
`;

export const NavText = styled.p`
  font-weight: bold;
  transform: translate(-175%, 100%);
`;

export const MenuBars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
