import React from 'react';
import {ButtonBox, Arrow } from './style';
import { FaWhatsapp } from 'react-icons/fa';
import ArrowImage from "../../assets/images/arrow.png"

export const Button = ({whatsapp, icon, width, text, noBackground, border, textColor}) => {
  return (
    <>
        <ButtonBox width={width} noBackground={noBackground} border={border} textColor={textColor}>
          { whatsapp ? <FaWhatsapp/> : null}
          {text}
          { icon  ? <Arrow src={ArrowImage} alt="arrow"/> : null}
        </ButtonBox>
    </>
  );
}