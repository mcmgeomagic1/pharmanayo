import styled from "styled-components";


export const FooterBox = styled.div`
    display: flex;
    grid-gap: 2em;
    width: 100%;
    background: ${({theme})=> theme.colors.boxBackground};
    height: 400px;
    position: relative;
    //align-items: center;
`
export const Title = styled.div`

`

export const Content = styled.div`
  display: flex;
  grid-gap: 3em;
  margin-top: 0em;
  justify-content: space-between;
  height: 87.6%;;

`
export const Flex1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3em;
  width: 30%;
  height: 100%;
  justify-content: center;

  img {
    width: 340px;
  }

  p{
    margin-top: -1.5em;
    opacity: .7;
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


