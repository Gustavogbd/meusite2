import React from 'react';
import { DiJavascript1, DiReact, DiBootstrap, DiGitBranch } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
      Dedico meu tempo ao aperfeiçoamento das minhas skills nas seguintes Tecnologias: 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <LinkContainer>
          <ListTitle>React.js</ListTitle>
          <ListParagraph>
          </ListParagraph>
        </LinkContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 size="3rem"/>
        <LinkContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>

          </ListParagraph>
        </LinkContainer>
      </ListItem>

      <ListItem>
        <DiBootstrap size="3rem"/>
        <LinkContainer>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </LinkContainer>
      </ListItem>

      <ListItem>
        <DiGitBranch size="3rem"/>
        <LinkContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </LinkContainer>
      </ListItem>
      
      <ListItem>
        <SiTailwindcss size="3rem"/>
        <LinkContainer>
          <ListTitle>Tailwind CSS</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </LinkContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
