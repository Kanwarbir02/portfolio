import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      
        <LinkItem>

          <LinkList>
            <LinkColumn>
              <LinkTitle>Call</LinkTitle>
              <LinkItem href="tel:xxxxxxxxxxxx">xxxxxxxxx</LinkItem>

              <LinkTitle>Email</LinkTitle>
              <LinkItem href="mailto:ksingh6_be20@thapar.edu">ksingh6_be20@thapar.edu</LinkItem>
            </LinkColumn>

          </LinkList>
        
        
      </LinkItem>

      <SocialContainer>
      <SocialIcons href="https://github.com/Kanwarbir02">
          <AiFillGithub size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.linkedin.com/in/kanwarbir-singh-2ba460200/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>

        <SocialIcons href="https://www.instagram.com/kanwarbir02/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        
      </SocialContainer>
    </FooterWrapper>

    
  );
};

export default Footer;
