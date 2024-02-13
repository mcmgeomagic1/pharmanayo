import React from 'react';
import {AnnoucmentBox, Flex1, Flex2, Input} from './style';
import Image from "../../assets/images/Annoucment.png"

export const Annoucment= () => {
  return (
    <>
        <AnnoucmentBox>
          <Flex1>
            <h2>Bientôt, découvrez la plateforme révolutionnaire Pharmanayo."</h2>
            <p>Nous construisons une plateforme innovante qui révolutionnera la distribution pharmaceutique. Bientôt, vous aurez accès à une solution intégrée qui simplifiera l'achat et la livraison de médicaments, garantissant rapidité, sécurité et efficacité. Restez à l'écoute pour plus de mises à jour!</p>
            <span>😎 Soyez le premier à être informé du lancement de l'application</span>
            <div>
              <Input placeholder='Entrez votre adresse e-mail'/>
              <button>Abonnez-vous</button>
            </div>
          </Flex1>
          <Flex2>
              <img src={Image} alt="anoucment"/>             
          </Flex2>
        </AnnoucmentBox>
    </>
  );
}

