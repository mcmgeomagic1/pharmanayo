import styled from "styled-components";

export const Menubox = styled.div`
    width: 100%;

`
export const AlertBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #F8FC4C;
    width: 100%;
    grid-gap: 1em;
`

export const Text = styled.span`
  font-weight: bold;
  color: ${({theme})=> theme.colors.standard.black}; 
  font-size: ${({theme})=> theme.fontSize.small};
  margin-right: 5px; 
`;

export const Emoji = styled.span`
  font-size: 17px; 
`;

export const ContactBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

export const LanguageSelect = styled.select`
  /* Add your styles for the language select here */
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PhoneIcon = styled.span`
  margin-right: 5px; /* Adjust as needed */
`;

export const PhoneNumber = styled.span`
  /* Add your styles for the phone number here */
`;