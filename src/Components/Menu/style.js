import styled from "styled-components";

export const Menubox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: 1.2em;

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
  grid-gap: 2em;
`;

export const LanguageSelect = styled.div`
  background: ${({theme})=> theme.colors.boxBackground};
  height: 35px;
  border-radius: 25px;
  display: flex;
  padding: 0 1.2em;
  align-items: center;
  grid-gap: .5em;

  span {
    font-size: 14px;
  }

  svg {
    font-size: 19px;
    stroke-width: 1.2;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: .5em;

  svg {
    transform: rotate(90deg);
    width: 14px;
  }
`;


export const PhoneNumber = styled.span`
    font-weight: bold;
    font-size: ${({theme})=> theme.fontSize.small};
`;

export const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 180px;
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.div`
  margin-left: 20px; 
  opacity: 0.7;

  &:first-child {
    opacity: 1;
    font-weight: bold;
  }
`;