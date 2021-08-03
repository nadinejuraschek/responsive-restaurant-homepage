import { MenuBars, Nav, NavLink, NavIcon, NavText } from "./styled";
import { NavbarProps } from "./types";

const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <Nav>
      <NavLink to="/">Pizza</NavLink>
      <NavIcon>
        <NavText>Menu</NavText>
        <MenuBars />
      </NavIcon>
    </Nav>
  );
};

export default Navbar;
