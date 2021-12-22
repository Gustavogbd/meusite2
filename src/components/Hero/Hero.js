import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bem Vindo ao <br />
        Meu Portfólio
      </SectionTitle>
      <SectionText>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com'}>Saiba Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;