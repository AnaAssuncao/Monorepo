import styled from 'styled-components'

export const Avatar = styled.img`
    border: 2px solid ${(props) => props.theme.color.gray};
    border-radius:70px;
    display:flex;
    align-items:center;
    height: ${(props) => props.width}px;
    margin-right:1.5rem;
    width: ${(props) => props.width}px;

`


