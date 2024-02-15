import styled from "styled-components";


export const AnnoucmentBox = styled.div`
    display: flex;
    grid-gap: 3em;
    width: 100%;
    padding: 5em 0 ;
    @media(max-width: ${({theme}) => theme.tablet}) {
        flex-direction: column;
        grid-gap: 0;
        text-align: center;
        background: ${({theme})=> theme.colors.boxBackground};

        div{
          width: 100%;
        }
    }
    
`
export const Flex1 = styled.div`
    width: 60%;
    height: 600px;
    background: ${({theme})=> theme.colors.boxBackground};
   
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 0em 9em 0 15.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 1.5em;

    h2{
      width: 80%;
      margin: 0;

      @media(max-width: ${({theme}) => theme.tablet}) {
        margin: 0 auto;
      }
    }

    span {
      font-weight: bold;
      margin-bottom: .5em;
    }

    div {
      display: flex;
      position: relative;
      width: 720px;
      display: none;

      @media(max-width: ${({theme}) => theme.desktop}) {
        width: 580px;
      }

      @media(max-width: ${({theme}) => theme.tablet}) {
        margin: 0 auto;
      }

      
      @media(max-width: ${({theme}) => theme.mobile}) {
        width: 320px;
        flex-direction: column;
        grid-gap: 1em;
        
      }

      button {
        border-radius: 50px;
        background-color: ${({ theme}) => theme.colors.primary};
        border: none;
        padding: 1.2em 1.4em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: bold;
        font-size: 110%;
        width: 200px;
        height: 67px;
        position: absolute;
        right: 0;

        
      @media(max-width: ${({theme}) => theme.tablet}) {
        position: relative;
        width: 100%;
      }
      }
    }

    @media(max-width: ${({theme}) => theme.desktop}) {
      padding: 0 3em 0 2.4em;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      padding: 0 5em;
      height: 300px;
      background: none;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
      height: 500px;
      padding: 0 1em;
    }

`
export const Flex2 = styled(Flex1)`
    width: 40%;
    
    border-radius: 0;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: ${({theme}) => theme.tablet}) {
      justify-content: flex-start;
      height: 390px;
      padding: 2em 0;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      height: 330px;
    }

    img {
      @media(max-width: ${({theme}) => theme.mobile}) {
      margin-top: 3em;
      width: 300px;
    }
    }

`

export const Input = styled.input`
    border-radius: 50px;
    padding: 1.5em 17em 1.5em 2em;
    background: #B2B9B5;
    width: 100%;
    border: 0;
    height: 67px;

    &:active {
      border: 0;
    }


`


