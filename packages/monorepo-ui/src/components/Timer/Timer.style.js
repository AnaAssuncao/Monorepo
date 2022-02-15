import styled from 'styled-components'

export const TimerContainer = styled.div`
    display:flex;
    align-items:center;
    font-size:20px;
    font-weight:600;
    color:${(props) => props.theme.color.title};
    margin-top:2rem;
`
export const Timer = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    background:${(props) => props.theme.color.white};
    box-shadow: 0 0 60px rgba(0,0,0, 0.05);
    font-size: 8.5rem;
    text-align: center;
`
export const TimerNumber= styled.div`
    flex:1;
`

export const TimerText= styled.div`
    font-size: 6.5rem;
    margin: 0 0.5rem;
`