import styled from 'styled-components'

export const SearchMusicContainer = styled.form`
    display:flex;
    align-items:center;
    justify-content: center;
    margin-bottom: 50px; 
    width: 100%;
    
`
export const Input = styled.input`
  border: 2px solid ${(props) => props.theme.color.gray};
  border-radius:10px;
  color: #6B778C;
  font-size:16px;
  height: 48px;
  margin-right: 20px; 
  padding-left: 16px;
  width: 22%;
`

export const Button = styled.div`
  width: 8%;
  min-width: 70px;
`