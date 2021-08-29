import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id="projects">

   <SectionDivider />

    <SectionTitle main>My Projects</SectionTitle>

    <GridContainer>
      {projects.map((project) => (
        <BlogCard key={project.id}>
          <Img src={project.image}></Img>

          <TitleContent>
            <HeaderThree>{project.title}</HeaderThree>
            <Hr></Hr>

            <CardInfo>{project.description}</CardInfo>
          </TitleContent>
          
        </BlogCard>
      ))}
    </GridContainer>

 </Section>
);

export default Projects;