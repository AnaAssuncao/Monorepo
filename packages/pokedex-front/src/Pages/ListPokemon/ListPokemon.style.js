import styled from 'styled-components'

export const ListContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction:column;
  justify-content: center;
  padding-top:32px;
  overflow: auto;
`

export const List= styled.ul`
  justify-content: center;
  background-color: ${(props) => props.theme.color.black};
  border-radius:16px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 50px 0;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius:10px;
    background: ${(props) => props.theme.color.gray};
  }
`

export const ListItem= styled.li`
  background-color:${(props) => props.theme.color.pokemon[props.typePokemon]};
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
  border-radius:20px;
  cursor:pointer;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  margin: 16px;
  height 200px;
  width: 350px;
`

export const ListTitle= styled.h2`
  color: ${(props) => props.theme.color.white};
  font-size:1.5rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 16px;
  text-align: center;
`

export const ListType= styled.div`
  color: ${(props) => props.theme.color.white};
  background-color: #ffffff59;
  border-radius:30px;
  padding: 12px 16px;
  width: fit-content;
`

export const ListImage= styled.img`

`

export const ListButton= styled.div`
  display:flex;
`

export const ContainerButton= styled.div`
  width: 150px; 
  margin:16px;
`