import styled from "styled-components";


export const AnnoucmentBox = styled.div`
    display: flex;
    grid-gap: 3em;
    height: 100vh;
    width: 100%;
    align-items: center;
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
    grid-gap: 1em;

    h2{
      width: 80%;
      margin: 0;
    }

    span {
      font-weight: bold;
    }

    div {
      display: flex;
      position: relative;
      width: 720px;

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
      }
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


