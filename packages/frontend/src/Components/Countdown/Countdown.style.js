import styled from 'styled-components'

export const CountdownContainer = styled.div`
    display:flex;
    align-items: center;
`

export const Countdown = styled.div`
    display:flex;
    align-items:center;
    font-size:20px;
    font-weight:600;
    color:${(props) => props.theme.color.title};
    margin-top:2rem;
`

