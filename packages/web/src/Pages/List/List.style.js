import styled from 'styled-components'

export const ListContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction:column;
  justify-content: center;
  height:85%;
  padding-top:2rem;
`

export const List= styled.ul`
  align-items:center;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction:column;
  height:90%;
  padding: 50px 0;
  width:80%;
  overflow: auto;
`

export const ListItem= styled.li`
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0;
  width:80%;
`

export const ListTitle= styled.h2`
  font-size:1.5rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 16px;

`

export const ListDescription= styled.p`
  font-size:1rem;
`


