import React from 'react';
import { DiJavascript1, DiReact, DiBootstrap } from 'react-icons/di';
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <LinkContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            React.js
          </ListParagraph>
        </LinkContainer>
      </ListItem>

      <ListItem>
        <DiJavascript1 size="3rem"/>
        <LinkContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            JavaScript Vanilla
          </ListParagraph>
        </LinkContainer>
      </ListItem>

      <ListItem>
        <DiBootstrap size="3rem"/>
        <LinkContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiência com <br />
            Bootstrap
          </ListParagraph>
        </LinkContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
