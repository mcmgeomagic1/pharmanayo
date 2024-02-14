import styled from "styled-components";


export const AboutUsBox = styled.div`
    display: flex;
    grid-gap: 2em;
    width: 100%;
    padding: 5em 0;
`
export const Title = styled.div`
    p{
      opacity: .7;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`

export const Content = styled.div`
  display: flex;
  grid-gap: 3em;
  margin-top: 2em;

  @media(max-width: ${({theme}) => theme.tablet}) {
    flex-direction: column;

    div{
      width: 100%;
    }
  }
`
export const Flex1 = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3em;
  width: 50%;

  div {
    border-radius: 25px;
    box-shadow: 4px 4px 8px rgba(0,0,0,0.1), -4px -4px 8px rgba(0,0,0,0.1);
    border-radius: 25px;
    padding: 1em; 

    p{
      opacity: .7;
    }
  }
`
export const Flex2 = styled.div`
  display: flex;
  width: 50%;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 25px;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.1), -4px -4px 8px rgba(0,0,0,0.1);
  border-radius: 25px;
  padding: 2em; 
  grid-gap: 1.5em;

  h3 {
    display: flex;
    align-items: center;
    grid-gap: 1em;

    svg {
      font-size: 21px;
    }
  }
`
export const Field= styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1em;
  

  input{
    padding: 1em;
    border-radius: 50px;
    border: 2px solid #3CA133;
  }

  textarea {
    height: 100px;
    border-radius: 25px;
    padding: 1em;;
    border: 2px solid #3CA133;
  }

  label{
    font-weight: bold;
  }


`

