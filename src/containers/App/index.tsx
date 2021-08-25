import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from '../../globalStyles';
import { Hero } from '../../components/Hero';
import { bakeryTheme, restaurantTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import { Navbar } from '../../components/Navbar';
import { ITheme } from './types';
import { Products } from '../../components/Products';

const themes: ITheme = {
  bakery: bakeryTheme,
  restaurant: restaurantTheme,
};

const App = (): JSX.Element => {
  const [customTheme, setCustomTheme] = useState(themes.bakery);
  const changeThemeHandler = () =>
    customTheme === themes.bakery
      ? setCustomTheme(themes.restaurant)
      : setCustomTheme(themes.bakery);

  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <GlobalStyle />
        <Container>
          <Navbar changeThemeHandler={changeThemeHandler} />
          <Hero />
          <Products />
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
