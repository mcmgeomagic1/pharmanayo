import React from 'react';
import {CategoriesBox, ContentItem, Title, Content} from './style';
import { Button } from '../Button';

const content = [
  {
    text: "Soins des femmes",
    image: require('../../assets/images/1.jpg')
  },
  {
    text: "Alleviation des démangeaisons et répulsif.",
    image: require('../../assets/images/2.jpg')
  },
  {
    text: "Blessures",
    image: require('../../assets/images/3.jpg')
  },
  {
    text: "Couches et accessoires.",
    image: require('../../assets/images/4.jpg')
  },
  {
    text: "Allergies",
    image: require('../../assets/images/5.jpg')
  },
  {
    text: "Femme enceinte",
    image: require('../../assets/images/6.jpg')
  }
];

export const Categories= () => {
  return (
    <>
        <CategoriesBox>
          <Title>
              <h2>Explorez nos catégories</h2>
              <p>Découvrez nos différentes catégories de produits pharmaceutiques pour trouver les solutions idéales pour votre bien-être</p>
          </Title>
          <Content>
              {content.map((item, index) => (
                  <ContentItem key={index} image={item.image}>
                      <h3>{item.text}</h3>
                      <a href="https://wa.me/242068438692" target='blank'>
                        <Button text="Explorar categoria" noBackground border="white" textColor="white" width="300px"/>
                      </a>
                  </ContentItem>
                
              ))}
          </Content>
        </CategoriesBox>
    </>
  );
}

