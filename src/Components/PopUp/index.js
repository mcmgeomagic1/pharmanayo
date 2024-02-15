import React from 'react';
import styled from 'styled-components';
import { MdOutlineCheckCircle } from "react-icons/md";

const PopoBox = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`
const PopupContainer = styled.div`
  background-color: #fff;
  width: 300px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.1), -4px -4px 8px rgba(0,0,0,0.1);
`;

const GreenCircle = styled.div`
  background-color: #2ecc71;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 16px;
`;

const Popup = () => {
  return (
    <PopoBox>
      <PopupContainer>
        <GreenCircle>
          <MdOutlineCheckCircle style={{ fontSize: '36px', color: '#fff' }} />
        </GreenCircle>
        <Message>Message envoyé avec succès!</Message>
      </PopupContainer>
    </PopoBox>
  );
};

export default Popup;
