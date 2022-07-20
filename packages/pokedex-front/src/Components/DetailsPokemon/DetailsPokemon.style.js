import styled from 'styled-components'

export const ModalMask = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  z-index: 9;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
`
  
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  margin: 0px auto;
  padding: 24px 0;
`
export const Content = styled.div`
  background-color: ${(props) => props.theme.color.white};
  border-radius:20px;
  height: 70vh;
  width: 400px;
  position:relative;
  overflow:auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Banner = styled.div`
  align-items: center;
  background-color:${(props) => props.theme.color.pokemon[props.typePokemon]};
  border-radius:20px;
  display: flex;
  flex-direction: column;
  height:30%;
  padding: 24px;

`
export const Image = styled.img`
  position: absolute;
  width: 50%;
  top: 48px;
`
export const Title= styled.h2`
  color: ${(props) => props.theme.color.white};
  font-size:1.5rem;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
`

export const CloseModal = styled.div`
  line-height: 1.5;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 0 25px;
  cursor: pointer;

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`

export const Details  = styled.div`
  display: flex;
  margin-top: 54px;
  align-content: center;
  justify-content: space-around;
`

export const DetailsContent  = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DetailsData  = styled.p`
  font-size:1.3rem;
  font-weight: 800;
`

export const DetailsText  = styled.p`
  margin-top: 12px;
`

export const  Abilities  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0;
`

export const AbilitiesTitle = styled.p`
  display: flex;
  font-weight: 800;
  margin-top: 12px;
`

export const AbilitiesName  = styled.p`
  display: flex;
  margin: 12px;
  padding: 12px;
  background-color: ${(props) => props.theme.color.gray};
  border-radius:20px;
`

export const AbilitiesContent  = styled.div`
  display: flex;
`

export const  Stats  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  margin: 24px 0;
`

export const StatsTitle = styled.p`
  display: flex;
  font-weight: 800;
`

export const StatsName  = styled.p`
  margin-top: 12px;
`

export const StatsContent  = styled.div`
  width:100%;
`

export const StatsProgress  = styled.div`
  display:flex;
  width:100%;
`
export const BarContainer  = styled.div`
  background-color: ${(props) => props.theme.color.gray};
  border-radius:20px;
  margin-right:12px;
  width:100%;
`

export const StatsBar  = styled.div`
  background-color:${(props) => props.theme.color.pokemon[props.typePokemon]};
  border-radius:20px;
  height: 100%;
  width:${(props) => props.width}%;
`

export const ContainerButton = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:100%
`

export const BackButton  = styled.button`
  background-color:${(props) => props.theme.color.white};
  color:${(props) => props.theme.color.pokemon[props.typePokemon]};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin: 16px;
  text-align: center
`
