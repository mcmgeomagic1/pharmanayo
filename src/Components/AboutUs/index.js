import React, {useRef} from 'react';
import {AboutUsBox, Title, Content, Flex1, Flex2, Field, Form} from './style';
import { Container } from '../../styles/Container';
import { Button } from '../Button';
import { MdOutlineEmail } from "react-icons/md";



export const AboutUs= () => {
  const form = useRef();

  /*const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };*/


  const overview = [
    {
      title: "✨ Vue d'ensemble",
      description: "Nous cherchons à mener la transformation du secteur pharmaceutique avec une solution innovante et agile, répondant aux besoins d'un marché en constante évolution."
    },
    {
      title: "🚀 Objectif",
      description: "Notre objectif est de simplifier la chaîne d'approvisionnement pharmaceutique, en facilitant la communication et en améliorant l'accessibilité aux médicaments."
    },
    {
      title: "📍 Adresse",
      description: "Rue de Belmonte, Bairro Popular, Kilamba Kiaxi, Luanda, Angola"
    }
  ];
  return (
    <>
        <AboutUsBox>
        <Container>
          <Title>
            <h2>À propos de nous</h2>
            <p>A Pharmanayo é uma empresa inovadora dedicada a revolucionar a distribuição farmacêutica. Nossa equipe está comprometida em conectar farmácias, clínicas médicas e clientes finais através de uma plataforma integrada, proporcionando uma experiência de compra eficiente e segura.</p>
          </Title>
          <Content>
            <Flex1>
                {overview.map(item => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
            </Flex1>
            <Flex2>
                <Form ref={form} >
                  <h3><MdOutlineEmail /> Contactez-nous</h3>
                  <Field>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="entrez votre email"/>
                  </Field>
                  <Field>
                    <label>Sujet</label>
                    <input type="text" name="user_name" placeholder="entrez le sujet"/>
                  </Field>
                  <Field>
                    <label>Message</label>
                    <textarea placeholder="entrez votre message"/>
                  </Field>
                  <Button text="envoyer"/>
                  <input type="submit" value="Send" />
                </Form>
            </Flex2>
          </Content>
        </Container>
      </AboutUsBox>
    </>
  );
}

