import React from 'react';
import { DiFirebase, DiReact, DiZend,DiCss3,DiHtml5,DiJavascript,DiMongodb,DiPython,DiPhotoshop, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  
  <Section>
    <SectionDivider />
    <br /><br /><br />
    <SectionTitle>Knowledge</SectionTitle>

    <SectionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos eius iste nam qui dolorum iure voluptatem debitis. Aspernatur accusantium iusto aut architecto? Similique harum minus qui nihil, doloribus tempore.</SectionText>

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
        <DiNodejs size="10rem" color="#003900"/><DiMongodb size="6rem" color="#016001"/>
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

  </Section>
);

export default Technologies;
