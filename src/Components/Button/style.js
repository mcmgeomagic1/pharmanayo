import styled from "styled-components";

export const ButtonBox = styled.p`
  z-index: 30;
  border-radius: 50px; 
  background-color: ${({ theme, noBackground }) => (noBackground ? null : theme.colors.primary)};
  color: ${props => props.textColor ? props.textColor : "#000"};
  border: ${props => props.border ? `1px solid ${props.border}` : "none"};
  padding: 1.2em 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 110%;
  grid-gap: .5em;
  width: ${props => props.width};
  height: 67px;

  svg {
    width: 25px;
    position: relative;
    height: 25px;
    margin-top: -.1em;
  }
`
export const Arrow = styled.img`
  width: 15%;;
`
