import styled from 'styled-components'

export const Button = styled.button`
 
    align-items: center;
    background-color: ${(props) => props.theme.color[props.backgroundColor]};
    border:${(props) => props.border}px;
    border-radius: 5px;
    color: ${(props) => props.theme.color[props.color]};
    cursor: ${(props) => props.isDisabled? "not-allowed" : "pointer"};
    pointer-events: ${(props) => props.isDisabled && "none"};
    disabled: ${(props) => props.isDisabled};
    display: flex;
    font-weight: 600;
    font-size: 1rem;
    justify-content: center;
    height: ${(props) => props.height}rem;
    width: 100%;

    &:hover{
        filter: brightness(0.9)
    }
`

