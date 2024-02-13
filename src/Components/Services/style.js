import styled from "styled-components";


export const ServicosBox = styled.div`
    grid-gap: 2em;
    height: 100vh;
    position: relative;
    padding: 0em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ServicesImage = styled.img`
    margin-left: -4.4em;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

`

export const Grids = styled.div`
  padding-top: 1.3em;
  width: 50%;
  display: grid; 
  grid-template-columns: repeat(2, auto);
  grid-gap: 1em;
`

export const ContentItem = styled.div`
  background: ${({theme, background})=> (background ? theme.colors.boxBackground : null)};
  width: 100%;
  height: 232px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  grid-gap: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1em;

  h3 {
    margin-bottom: 0;
  }

  svg {
    font-size: 30px;
  }

  p {
    opacity: .7;
    font-size: ${({theme})=> theme.fontSize.small};
  }
`

