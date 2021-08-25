import bakeryHero from "../../images/bakery1.jpeg";
import bakeryLogo from "../../assets/bakeryLogo.png";
import restaurantHero from "../../images/restaurant1.jpg";
import restaurantLogo from "../../assets/restaurantLogo.png";
import { Theme } from "./types";

export const bakeryTheme: Theme = {
  colors: {
    buttonBackgroundColor: '#B97948',
    buttonColor: '#333333',
    buttonBackgroundHoverColor: '#C7946D',
    buttonHoverColor: '#333333',
    mainBackgroundColor: '#f8f8f8',
    mainTextColor: '#333333',
    titleColor: '#A5C4DC',
  },
  design: {
    borderRadiusSm: '4px',
    borderRadiusMd: '10px',
    buttonRound: true,
    shadow: '2px 4px 6px #00000020',
    hoverShadow: '2px 4px 8px #00000030',
    transition: '0.2s ease-out',
  },
  fonts: {
    titleFont: 'Spectral',
    textFont: 'Karla',
  },
  images: {
    hero: bakeryHero,
    logo: bakeryLogo,
  },
};

export const restaurantTheme: Theme = {
  colors: {
    buttonBackgroundColor: '#63C071',
    buttonColor: '#333E48',
    buttonBackgroundHoverColor: '#80d66d',
    buttonHoverColor: '#333E48',
    mainBackgroundColor: '#f1f3f2',
    mainTextColor: '#333E48',
    titleColor: '#ffffff',
  },
  design: {
    borderRadiusSm: '4px',
    borderRadiusMd: '6px',
    buttonRound: false,
    shadow: '2px 4px 4px #333E4820',
    hoverShadow: '2px 4px 6px #333E4830',
    transition: '0.2s ease-out',
  },
  fonts: {
    titleFont: 'Nunito',
    textFont: 'Nunito',
  },
  images: {
    hero: restaurantHero,
    logo: restaurantLogo,
  },
};
