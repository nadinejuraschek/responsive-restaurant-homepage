import { HeroContainer } from "./styles";

import { HeroProps } from "./types";

import Navbar from "../Navbar";

const Hero = (props: HeroProps) : JSX.Element => {
  return (
    <HeroContainer>
      <Navbar />
    </HeroContainer>
  );
};

export default Hero;