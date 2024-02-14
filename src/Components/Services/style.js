import styled from "styled-components";


export const ServicosBox = styled.div`
    grid-gap: 2em;
    position: relative;
    padding: 5em 0;

    @media(max-width: ${({theme}) => theme.mobile}) {
      padding: .5em 0em 0 5em 0;
    }
`

export const ServicesImage = styled.img`
    margin-left: -4.4em;

    @media(max-width: ${({theme}) => theme.desktop}) {
      width: 50%;
      margin-left: -3.9em;
    }

`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

      @media(max-width: ${({theme}) => theme.tablet}) {
        flex-direction: column;
        align-items: center;
        margin-top: 2em;

        img {
          width: 530px;
        
        }
      }

      @media(max-width: ${({theme}) => theme.mobile}) {

        img {
          width: 330px;
          margin-left: -1.7em;
        }
      }



`

export const Grids = styled.div`
  padding-top: 1.3em;
  width: 50%;
  display: grid; 
  grid-template-columns: repeat(2, auto);
  grid-gap: 1em;


  @media(max-width: ${({theme}) => theme.tablet}) {
        width: 100%;
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
    grid-template-columns: repeat(1, auto);
  }
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

