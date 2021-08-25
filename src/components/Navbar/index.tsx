import { useContext } from 'react';
import { Logo, Nav, NavLink } from './styled';
import { NavbarProps } from './types';
import { ThemeContext } from 'styled-components';

export const Navbar = (props: NavbarProps): JSX.Element => {
  const { changeThemeHandler } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <Nav>
      <NavLink onClick={changeThemeHandler}>
        <Logo alt='Bakery Logo' src={themeContext.images.logo} />
      </NavLink>
    </Nav>
  );
};
