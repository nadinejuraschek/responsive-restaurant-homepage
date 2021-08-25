export interface Colors {
  readonly buttonBackgroundColor: string;
  readonly buttonColor: string;
  readonly buttonBackgroundHoverColor: string;
  readonly buttonHoverColor: string;
  readonly mainBackgroundColor: string;
  readonly mainTextColor: string;
  readonly titleColor: string;
}

export interface Design {
  readonly borderRadiusSm: string;
  readonly borderRadiusMd: string;
  readonly buttonRound: boolean;
  readonly shadow: string;
  readonly hoverShadow: string;
  readonly transition: string;
}

export interface Fonts {
  readonly titleFont: string;
  readonly textFont: string;
}

export interface Images {
  readonly hero: string;
  readonly logo: string;
}

export interface Theme {
  readonly colors: Colors;
  readonly design: Design;
  readonly fonts: Fonts;
  readonly images: Images;
}
