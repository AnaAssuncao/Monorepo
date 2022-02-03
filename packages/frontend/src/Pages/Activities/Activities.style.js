import styled from 'styled-components'

export const ActivitiesContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction:column;
  justify-content: center;
  height:85%;
  padding-top:2rem;
`

export const Activities= styled.ul`
  align-items:center;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction:column;
  height:90%;
  padding: 50px 0;
  width:80%;
  overflow: auto;
`

export const ActivitiesItem= styled.li`
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0;
  width:80%;
`

export const ActivitiesTitle= styled.h2`
  font-size:1.5rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 16px;

`

export const ActivitiesDescription= styled.p`
  font-size:1rem;
`

export const ActivitiesAmount= styled.p`
  margin-top: 12px;
  font-size:1rem;
  color: ${(props) => props.theme.color.blue};
`