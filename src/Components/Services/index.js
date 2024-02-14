import React from 'react';
import { ServicosBox, ServicesImage, Content, Grids, ContentItem} from './style';
import { Button } from '../Button';
import { SectionTitle } from '../../styles/common';
import ServicoImage from "../../assets/images/servicos.png"
import { FiCpu } from "react-icons/fi";

const content = [
  {
    title: "Commande Simplifiée",
    description: "Les pharmacies et les cliniques peuvent passer des commandes rapidement et intuitivement, garantissant une expérience d'achat rationalisée pour tous les intervenants."
  },
  {
    title: "Plateforme Intégrée",
    description: "Une plateforme en ligne complète, permettant une gestion efficace des stocks, des commandes et de la communication entre les pharmacies, les cliniques médicales et les clients finaux."
  },
  {
    title: "Livraison Rapide et Sécurisée",
    description: "Notre système de livraison est conçu pour garantir que les médicaments arrivent rapidement et en toute sécurité dans les pharmacies et les cliniques, offrant commodité et tranquillité d'esprit aux clients."
  },
  {
    title: "Support Spécialisé",
    description: "Notre équipe dédiée offre un support technique et une assistance personnalisée pour garantir la satisfaction et le succès de tous les utilisateurs de Pharmanayo."
  }
];

export const Services= () => {
  return (
    <>
        <ServicosBox>
           <SectionTitle>
              <div>
                <h2>Pourquoi nous sommes le bon choix. Découvrez nos services</h2>
                <p>Pharmanayo simplifie la distribution pharmaceutique</p>
              </div>
              <Button text="Demander une livraison" width="290px" whatsapp={true}/>
           </SectionTitle>
           <Content>
              <ServicesImage src={ServicoImage} alt="servico"/>
              <Grids>
              {content.map((item, index) => (
                  <ContentItem key={index} background={index % 3 === 0}>
                      <FiCpu size="24"/>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                  </ContentItem>
              ))}
              </Grids>
           </Content>
           
        </ServicosBox>
    </>
  );
}

