import React from 'react';
import { TopFlex, BottomFlex, HeaderBox, Flex1, Flex2, Headline, Text, Hero, ButtonSection, Flex3, Flex4, HeaderImage2 } from './style';
import { FaPhone } from 'react-icons/fa';
import { FiGlobe } from "react-icons/fi";
import { Container } from '../../styles/Container';
import header1 from "../../assets/images/HeaderImage.png"
import { Button } from '../Button';

export const Header = () => {
  return (
    <>
        <HeaderBox>
            <TopFlex>
              <Flex1>
                <svg width="844" height="491" viewBox="0 0 874 491" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 25C0 11.1929 11.1929 0 25 0H849C862.807 0 874 11.1929 874 25V358.5C874 372.307 862.807 383.5 849 383.5H650.461C636.654 383.5 625.461 394.693 625.461 408.5V466C625.461 479.807 614.269 491 600.461 491H25C11.1929 491 0 479.807 0 466V25Z" fill="#DDE3E0"/>
                </svg>
                <Hero>
                  <Headline>Transformant la distribution pharmaceutique pour la rendre plus facile.</Headline>
                  <Text>Transformer la distribution pharmaceutique est plus facile que jamais avec Pharmanayo. Nous connectons les pharmacies, les cliniques médicales et les clients sur une plateforme intégrée, rendant l'achat de médicaments rapide, efficace et sûr</Text>
                  <ButtonSection>
                    <Button text="Demander une livraison" width="290px" whatsapp={true}/>
                    <Button text="En savoir plus" width="100" icon  noBackground/>
                  </ButtonSection>
                </Hero>
              </Flex1>
              <Flex2>
                <img src={header1} alt="header1"/>
              </Flex2>
            </TopFlex>
            <BottomFlex>
              <Flex3>
                 <span>100%</span>
                 <p>Rapide et efficace</p>
              </Flex3>
              <Flex4>
                <span>Votre besoin</span>
                <p>Nous importe</p>
              </Flex4>
            </BottomFlex>
            <HeaderImage2/>
        </HeaderBox>
    </>
  );
}

