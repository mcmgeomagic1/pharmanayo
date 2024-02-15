import React, { useRef, useState } from 'react';
import { AboutUsBox, Title, Content, Flex1, Flex2, Field, Form, ButtonField } from './style'; // Assuming you have a Popup styled-component
import { Container } from '../../styles/Container';
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import Popup from '../PopUp';

export const AboutUs= () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_aqs9h2c', 'template_3y2n3gb', form.current, {
        publicKey: 'v5j0EbJDiQuo3pYfc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowPopup(true); // Show the popup on success
          setTimeout(() => {
            setShowPopup(false); // Hide the popup after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  console.log(form)

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
      description: "Pointe-noire, Rond point ex Bata, Immeuble 2MP, 2eme étage bureau C."
    }
  ];

  return (
    <>
      <AboutUsBox id="aboutus">
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
              <Form ref={form} onSubmit={sendEmail}>
                <h3><MdOutlineEmail /> Contactez-nous</h3>
                <Field>
                  <label>Email</label>
                  <input type="email" name="from_name" placeholder="entrez votre email" required/>
                </Field>
                <Field>
                  <label>Nom</label>
                  <input type="text" name="from_name" placeholder="entrez le nom" required/>
                </Field>
                <Field>
                  <label>Message</label>
                  <textarea name="message"  placeholder="entrez votre message" required/>
                </Field>
                <ButtonField>
                  <input  type="submit" value="envoyer" />
                </ButtonField>
              </Form>
            </Flex2>
          </Content>
        </Container>
      </AboutUsBox>
      {showPopup && <Popup/>}
    </>
  );
}
