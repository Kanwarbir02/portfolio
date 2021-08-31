import React from 'react';
import { DiFirebase, DiReact, DiZend,DiCss3,DiHtml5,DiJavascript,DiMongodb,DiPython,DiPhotoshop, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  
  <Section id="technologies">
    <SectionDivider />
    <br /><br /><br />
    <SectionTitle>Knowledge</SectionTitle>

    <SectionText>These are some of the languages, frameworks and technologies I've learned about since I got started with Programming.</SectionText>

  <List>
    <ListItem>
      <DiReact size="6rem" color="#38DADA" blur="10px"/>
    </ListItem>
    <ListContainer>
      <ListTitle>React.js</ListTitle>
      <ListParagraph>Experience with Frontend Frameworks <br /></ListParagraph>
    </ListContainer>

    
  </List>

  <List>
    <ListItem>
        <DiNodejs size="10rem" color="#00B500"/><DiMongodb size="6rem" color="#016001"/>
      </ListItem>
      <ListContainer style={{marginTop:"50px"}}>
        <ListTitle>Node.js & MongoDB</ListTitle>
        <ListParagraph >Experience with Backend Development and Databases <br /></ListParagraph>
      </ListContainer>
  </List>

  <List>
    <ListItem>
        <DiHtml5 size="4rem" color="orange" /><DiCss3 size="4rem" color="cyan"/>
        <DiJavascript size="4rem" color="yellow" />
      </ListItem>
      <ListContainer style={{marginTop:"20px"}}>
        <ListTitle>Basics of Frontend</ListTitle>
        <ListParagraph >Experience with JS DOM Manipulation, CSS and HTML <br /></ListParagraph>
      </ListContainer>
  </List>

  <List>
    <ListItem>
      <DiPython size="6rem" />
    </ListItem>
    <ListContainer>
      <ListTitle>Python</ListTitle>
      <ListParagraph>Other Programming Languages<br /></ListParagraph>
    </ListContainer>

    
  </List>

  </Section>
);

export default Technologies;
