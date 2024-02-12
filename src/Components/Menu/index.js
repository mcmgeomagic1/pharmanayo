// Menu.js

import React from 'react';
import { Menubox, Text, Emoji, AlertBar,  ContactBar, LanguageSelect, ContactInfo, PhoneIcon, PhoneNumber  } from './style';
import { FaPhone } from 'react-icons/fa';
import { Container } from '../../styles/Container';

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
              
            </LanguageSelect>
            <ContactInfo>
              <PhoneIcon>
                <FaPhone size={24} />
              </PhoneIcon>
              <PhoneNumber>+244 123 456 789</PhoneNumber> 
            </ContactInfo>
          </ContactBar>
      </Container>
    </Menubox>
  );
}

