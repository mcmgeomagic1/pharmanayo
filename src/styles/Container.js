import styled from 'styled-components'

export const Container= styled.div`
	width: 1400px;
	height: auto;
	margin: 0 auto;
	display: block;
	z-index: 2;

	@media(max-width: ${({theme}) => theme.desktop}) {
		width: 1100px;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		width: 80%;
	}

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 90%;
	}
`