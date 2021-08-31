import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nonpadding id="about">
    <LeftSection>

      <SectionTitle main center>
        I'm Kanwarbir <br />
        A Full Stack Web Developer
      </SectionTitle>

      <SectionText>
        A student at Thapar Institute of Engineering and Technology, currently pursuing Computer Science and Business Systems. I'm aiming to be a MERN stack developer, currently being proficient with FrontEnd and Backend Web Development.
      </SectionText>

      <Button onClick={() => window.location="https://drive.google.com/file/d/1V5huHjvNqgdW80mk-5Je6gAjJFDeYFqQ/view?usp=sharing"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
