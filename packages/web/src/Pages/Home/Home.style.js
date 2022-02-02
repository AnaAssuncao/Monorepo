import styled from 'styled-components'

export const HomeContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction:column;
  justify-content: center;
  height:85%;
  padding-top:2rem;
`

export const HomeSection = styled.div`
  align-content:center;
  display:grid;
  flex:1;
  grid-template-columns:1fr 1fr;
  gap: 6.25rem;
  width:70%;
`

export const HomeBox = styled.div`

`


