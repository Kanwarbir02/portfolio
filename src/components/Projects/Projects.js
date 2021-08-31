import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id="projects">

   <SectionDivider />

    <SectionTitle main>My Projects</SectionTitle>

    <GridContainer>
      {projects.map(({id, image, title, description, tags, visit, source}) => (
        <BlogCard key={id}>
          <Img src={image}></Img>

          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr></Hr>
          </TitleContent>

          <CardInfo>{description}</CardInfo>
          <br />

          <div>
            <TitleContent>Technologies Used</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>

          </div>


          <UtilityList>
            
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>

        </BlogCard>
      ))}
    </GridContainer>

 </Section>
);

export default Projects;