import styled from "styled-components";
import header2 from "../../assets/images/hero2.png"

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 2em;
    height: 100%;
    margin: 1em 0;
    position: relative;

    @media(max-width: ${({theme}) => theme.tablet}) {
      margin-top: 2em;
    }
`

export const TopFlex = styled.div`
    display: flex;
    width: 100%;
    height: 490px;
    grid-gap: 2.5em;
  
    img {

    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      flex-direction: column;
      height: auto;
    }
`

export const Flex1 = styled.div`
  width: auto;
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    width: 100%;
    height: 491px;
    top: 0;
    z-index: -0;

    @media(max-width: ${({theme}) => theme.desktop}) {
      display: none;
    }
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
      display: flex;
      flex-direction: column;
      grid-gap: 1em;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
      height: auto;
    }
 
`
export const Hero = styled.div`
    padding: 4.5em 3em 4.5em 4em;
    display: flex;
    flex-direction: column;
    grid-gap: 2em;

    svg {
      width: 25px;
      height: 25px;
      position: relative;
    }

    @media(max-width: ${({theme}) => theme.desktop}) {
      background-color: ${({theme})=> theme.colors.boxBackground};
      border-radius: 25px;
      padding: 2em;
      grid-gap: 1em;
      height: 100%;
      justify-content: center;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      padding: 4.5em 3em 4.5em 3em;
      grid-gap: 2em;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
      padding: 4.5em 3em 4.5em 3em;
    }

    
`


export const Flex2 = styled.div`
  width: auto;

  img{
    height: 100%;
    height: 78.4%;

    @media(max-width: ${({theme}) => theme.desktop}) {
      height: 100%;
      width: 100%;
      border: 10px solid ${({theme})=> theme.colors.primary};
      border-radius: 25px;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      border: 0;
      width: 70%;
    }

  }

  @media(max-width: ${({theme}) => theme.tablet}) {
      grid-gap: 2em;
      display: flex;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
      flex-direction: column;
      img {
        width: 100%;
      }
  }
`
export const Headline = styled.p`
  z-index: 5;
  font-size: ${({theme})=> theme.fontSize.extraBig};
  font-weight: 900;
  line-height: 40px;
  width: 100%;

  @media(max-width: ${({theme}) => theme.mobile}) {
    font-size: 160%;
  }
`

export const Text = styled.p`
  font-size: ${({theme})=> theme.fontSize.big};
  line-height: 32px;
  opacity: .7;
  margin-bottom: 1em;
`

export const BottomFlex = styled.div`
  display: flex;
  height: 150px;
  grid-gap: 2em;

  @media(max-width: ${({theme}) => theme.desktop}) {
    grid-gap: 2.8em;
  }

  @media(max-width: ${({theme}) => theme.tablet}) {
      display: none;
  }


  &&.mobile {
      display: none;
      flex-direction: column;
      width: 100%;
      @media(max-width: ${({theme}) => theme.tablet}) {
        display: flex;
      }

      div {
        width: 100%;
      }
  }
`

export const ButtonSection = styled.div`
  display: flex;

  @media(max-width: ${({theme}) => theme.tablet}) {
    justify-content: center;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
      flex-direction: column;

      p {
        width: 100%;
        font-size: 100%;
      }

      img {
        width: 30px;
      }
  }
`


export const Flex3 = styled.div`
  border: 5px solid ${({theme})=> theme.colors.primary};
  border-radius: 25px;
  width: 21.1%;
  height: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 240%;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    opacity: .7;
  }

  @media(max-width: ${({theme}) => theme.desktop}) {
    width: 32.2%;

    justify-content: center;
  }

`

export const Flex4 = styled(Flex3)`
  background: ${({theme})=> theme.colors.boxBackground};
  border: 0;
  display: block;
  padding-top: 3.2em;
  @media(max-width: ${({theme}) => theme.tablet}) {
    padding-top: 2em;
  }

  span {
    font-size: 180%;
    font-weight: bold;
    margin-bottom: .7em;
  }

  @media(max-width: ${({theme}) => theme.desktop}) {
    width: 32.2%;
  }

`


export const HeaderImage2 = styled.div`
  background: url(${header2});
  width: 737px;
  height: 250px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  background-position: center;
  background-size: cover;

  @media(max-width: ${({theme}) => theme.desktop}) {
    display: none;
  }

  &&.desktop {
    display: flex;
    position: relative;
    height: 100%;
    width: 40%;
  }
`

export const HeaderImage2Mobile = styled.div`
  background: url(${header2});
  width: 737px;
  height: 250px;
  right: 0;
  bottom: 0;
  border-radius: 25px;
  background-position: center;
  background-size: cover;
  margin-top: 1.5em;
  display: none;

  @media(max-width: ${({theme}) => theme.tablet}) {
    display: block;
    width: 100%;
    height: 350px;
  }
`
