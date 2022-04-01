import styled from 'styled-components'

export const MusicContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction:column;
  justify-content: center;
  height:85%;
  padding-top:2rem;
`

export const Music = styled.div`
  padding-top:2rem;
`

export const LyricsContainer = styled.div`
  align-items:center;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  flex-direction:column;
  height:80%;
  padding: 50px ;
  overflow: auto;
  width:80%;
`

export const Artist = styled.h2`
  color: ${(props) => props.theme.color.title};
`

export const Title = styled.h4`
  margin:16px;
`