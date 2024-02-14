// Menu.js

import React, {useState} from 'react';
import { Menubox, Text, Emoji, AlertBar, Close,  ContactBarPhone, MenuPhoneBox, ContactBar, LanguageSelect, ContactInfo, PhoneNumber, MenuBar, Logo, MenuItems, MenuItem  } from './style';
import { FaPhone } from 'react-icons/fa';
import { FiGlobe } from "react-icons/fi";
import { Container } from '../../styles/Container';
import LogoImage from "../../assets/images/logo.png"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Menubox>
      <AlertBar>
        <Emoji role="img" aria-label="Fire">🔥</Emoji>
        <Text>Application mobile disponible bientôt</Text>
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
        <IoMenu onClick={()=> toggleMenu()}/>
        <MenuItems>
          <MenuItem>Home</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Plateforme</MenuItem>
          <MenuItem>À propos de nous</MenuItem>
        </MenuItems>
      </MenuBar>
      </Container>
      {
        menuOpen ?
          <MenuPhone toggleMenu={toggleMenu}/>
        : null
      }
    </Menubox>
  );
}

const MenuPhone =({toggleMenu})=> {
  return(
    <MenuPhoneBox>
      <Close><IoMdClose onClick={()=> toggleMenu()}/></Close>
        <MenuItems className='mobile'>
          <MenuItem>Home</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Plateforme</MenuItem>
          <MenuItem>À propos de nous</MenuItem>
        </MenuItems>
        <ContactBarPhone>
            <LanguageSelect>
              <FiGlobe/> 
              <span>FR</span>
            </LanguageSelect>
            <ContactInfo>
              <FaPhone size={24} />
              <PhoneNumber>+244924456789</PhoneNumber> 
            </ContactInfo>
          </ContactBarPhone>
    </MenuPhoneBox>
  )
}

