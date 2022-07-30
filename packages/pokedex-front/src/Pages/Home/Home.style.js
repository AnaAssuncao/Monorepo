import styled from 'styled-components'

export const HomeContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  justify-content: space-around;
  height:95vh;
  padding-top:2rem;
`

export const HomeText = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.pokemon.grass};
  box-shadow: 0px 1px 10px ${(props) => props.theme.color.pokemon.grass};;
  color: ${(props) => props.theme.color.white};
  border-radius: 20px;
  display: flex;
  font-size:20px;
  flex-direction:column;
  padding:32px;
`

export const HomeImg = styled.img`
  
`