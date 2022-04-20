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
  background-color: ${(props) => props.theme.color.white};
  border-radius:16px;
  display: flex;
  flex-direction:column;
  height:80%;
  padding: 50px ;
  overflow: auto;
  width:54%;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius:10px;
    background: ${(props) => props.theme.color.gray};
  }

`

export const  Title = styled.h2`
  color: ${(props) => props.theme.color.title};
  font-size: 36px;
`

export const Artist = styled.h4`
  margin:16px 0;
`

export const Label = styled.h4`
  font-size:24px;
`