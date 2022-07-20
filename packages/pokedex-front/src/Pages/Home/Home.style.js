import styled from 'styled-components'

export const HomeContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction:column;
  justify-content: center;
  height:95vh;
  padding-top:2rem;
`

export const HomeText = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.pokemon.grass};
  color: ${(props) => props.theme.color.black};
  border-radius: 20px;
  display: flex;
  font-size:18px;
  flex-direction:column;
  justify-content: center;
  padding:12px;
  
`

