import React from 'react';
import {FooterBox, Flex1, Flex2, Content, Box, Socias, Copyright} from './style';
import { Container } from '../../styles/Container';
import LogoImage from "../../assets/images/logo.png"
import { FaWhatsapp, FaFacebook, FaGoogle } from 'react-icons/fa';

export const Footer= () => {
  return (
    <>
        <FooterBox>
        <Container>
          <Content>
            <Flex1>
                <img src={LogoImage} alt="Logo"/>
                <p>Pharmanayo révolutionne la distribution pharmaceutique en unissant les pharmacies, les cliniques et les clients sur une plateforme intégrée pour une expérience d'achat sûre et efficace</p>
            </Flex1>
            <Flex2>
              <Box>
                <h3>Navigation</h3>
                <div><a href="#">Accueil</a></div>
                  <div><a href="#service">Services</a></div>
                  <div><a href="#platform">Plateforme</a></div>
                  <div><a href="#aboutus">À propos de nous</a></div>
              </Box>
              <Box>
                <h3>Contact</h3>
                <div style={{color: "#3CA133"}}>+24495587374</div>
                <div>info@pharmanayo.com</div>
                <Socias>
                  <FaWhatsapp />
                  <FaFacebook />
                  <FaGoogle />
                </Socias>
              </Box>
            </Flex2>
          </Content>
          <Copyright>
            <span>@copyright Pharmanayo. Tous droits réservés</span>
          </Copyright>
        </Container>
      </FooterBox>
    </>
  );
}

