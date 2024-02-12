// Menu.js

import React from 'react';
import { Menubox, Text, Emoji, AlertBar,  ContactBar, LanguageSelect, ContactInfo, PhoneNumber, MenuBar, Logo, MenuItems, MenuItem  } from './style';
import { FaPhone } from 'react-icons/fa';
import { FiGlobe } from "react-icons/fi";
import { Container } from '../../styles/Container';
import LogoImage from "../../assets/images/logo.png"

export const Menu = () => {
  return (
    <Menubox>
      <AlertBar>
        <Emoji role="img" aria-label="Fire">🔥</Emoji>
        <Text>Aplicação mobile disponível em breve</Text>
      </AlertBar>
      <Container>
          <ContactBar>
            <LanguageSelect>
              <FiGlobe/> 
              <span>FR</span>
            </LanguageSelect>
            <ContactInfo>
              <FaPhone size={24} />
              <PhoneNumber>+244924456789</PhoneNumber> 
            </ContactInfo>
          </ContactBar>
      </Container>
      <Container>
      <MenuBar>
        <Logo src={LogoImage} alt="Logo"/>
        <MenuItems>
          <MenuItem>Home</MenuItem>
          <MenuItem>Serviços</MenuItem>
          <MenuItem>Plataforma</MenuItem>
          <MenuItem>Sobre nós</MenuItem>
        </MenuItems>
      </MenuBar>
      </Container>
    </Menubox>
  );
}

