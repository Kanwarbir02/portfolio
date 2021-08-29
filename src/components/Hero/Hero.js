import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nonpadding>
    <LeftSection>

      <SectionTitle main center>
        I'm Kanwarbir <br />
        A Full Stack Web Developer
      </SectionTitle>

      <SectionText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo in natus, dolorum consequuntur asperiores sed harum quaerat minima minus similique consequatur commodi blanditiis. Cupiditate corporis voluptatibus quos, suscipit expedita consequuntur.
      </SectionText>

      <Button onClick={() => window.location="/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;