import styled from "styled-components";


export const FooterBox = styled.div`
    display: flex;
    grid-gap: 2em;
    width: 100%;
    background: ${({theme})=> theme.colors.boxBackground};
    height: 400px;
    position: relative;
    //align-items: center;
    @media(max-width: ${({theme}) => theme.mobile}) {
      height: auto;
      padding-bottom: 5.5em;
      padding-top: 1em;
    }
`
export const Title = styled.div`

`

export const Content = styled.div`
  display: flex;
  grid-gap: 3em;
  margin-top: 0em;
  justify-content: space-between;
  height: 87.6%;

  @media(max-width: ${({theme}) => theme.mobile}) {
      flex-direction: column;
      height: auto;
      grid-gap: 2em;
    }

  

`
export const Flex1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3em;
  width: 30%;
  height: 100%;
  justify-content: center;

  @media(max-width: ${({theme}) => theme.tablet}) {
      margin-top: 1.5em;
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
    width: 100%;
 }

  img {
    width: 340px;

    @media(max-width: ${({theme}) => theme.tablet}) {
      width: 180px;
    }
  }

  p{
    margin-top: -1.5em;
    opacity: .7;

    @media(max-width: ${({theme}) => theme.mobile}) {
      width: 100%;
    }
  }

  
`
export const Flex2 = styled.div`
  display: flex;
  width: 50%;
  padding-top: 6.2em;
  grid-gap:4em;
  justify-content: flex-end;


  h3{
    margin-bottom: .3em;
    text-transform: uppercase;
    font-weight: 900;
  }

  div{
   
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
      flex-direction: column;
      padding-top: 0;
      grid-gap: 2em;
    }
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 1em;
`
export const Socias = styled.div`
    display: flex;
    grid-gap: 1em;
    color: #3CA133;
`
export const Copyright = styled.div`
  width: 100%;
  background: ${({theme})=> theme.colors.primary};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: ${({theme})=> theme.fontSize.small};
`


