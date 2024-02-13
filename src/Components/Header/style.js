import styled from "styled-components";
import header2 from "../../assets/images/hero2.png"

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 2em;
    height: 100%;
    margin: 1em 0;
    position: relative;

`

export const TopFlex = styled.div`
    display: flex;
    width: 100%;
    height: 490px;
    grid-gap: 2.5em;
   

    img {

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
`


export const Flex2 = styled.div`
  width: auto;

  img{
    height: 100%;
    height: 78.4%;
  }
`
export const Headline = styled.p`
  z-index: 5;
  font-size: ${({theme})=> theme.fontSize.extraBig};
  font-weight: 900;
  line-height: 40px;
  width: 100%;
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
`

export const ButtonSection = styled.div`
  display: flex;
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


`

export const Flex4 = styled(Flex3)`
  background: ${({theme})=> theme.colors.boxBackground};
  border: 0;
  display: block;
  padding-top: 3.2em;

  span {
    font-size: 180%;
    font-weight: bold;
    margin-bottom: .7em;
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


`


