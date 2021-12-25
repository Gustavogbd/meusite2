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
        Trabalhando para transformar o que era um hobby, numa carreira de sucesso!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/Gustavogbd'}>Saiba Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;