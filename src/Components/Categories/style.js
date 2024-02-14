import styled from "styled-components";


export const CategoriesBox = styled.div`
    width: 100%;
    padding: 5em 0 5em 0;

    @media(max-width: ${({theme}) => theme.mobile}) {
      margin-top: 10em;
      padding: 5em 0 0em 0;
    }

`
export const Title = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 1em;
    flex-direction: column;
    width: 100%;
    margin-bottom: 4em;
    padding: 0;

    h2 {
      margin: 0;
      padding: 0;
      text-align: center;
    }

    p {
      opacity: .7;
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      p{
        width: 80%;
      }
    }
`
export const Content = styled.div`
    display: flex;
    display: flex;
    height: 600px;
    
    @media(max-width: ${({theme}) => theme.desktop}) {
      height: 600px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: ${({theme}) => theme.tablet}) {
      height: 800px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: ${({theme}) => theme.mobile}) {
      grid-template-columns: repeat(1, 1fr);
  }

  @media(max-width: ${({theme}) => theme.mobile}) {
      height: 2100px;
      
    }
`

export const ContentItem = styled.div`
  background: ${({theme, background})=> (background ? theme.colors.boxBackground : null)};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: 
    linear-gradient(rgba(0, 10, 0, 0.7), rgba(0, 60, 0, 0.7)),
    url(${props=> props.image});
  background-position: center;
  background-size: cover;
  color: ${({theme})=> theme.colors.standard.white};
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:hover {
    transform: translateY(5px);
    background: 
    linear-gradient(rgba(0, 10, 0, 0.5), rgba(0, 60, 0, 0.5)),
    url(${props=> props.image});
    background-position: center;
    background-size: cover;
  }
  

  h3 {
    margin-bottom: 0;
    width: 70%;
    height: 40px;
  }
`

