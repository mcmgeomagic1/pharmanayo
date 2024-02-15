import styled from "styled-components";

export const Main =  styled.div`
    height: 100%;
`

export const SectionTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    p {
        opacity: .7;
    }

    a {
        p{
            opacity: 1;
        }
    }

      @media(max-width: ${({theme}) => theme.tablet}) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        grid-gap: 1em;

        h2 {
            margin: 0 auto .5em auto;
            width: 100%;
        }
      }
`