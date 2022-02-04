import styled from 'styled-components'

export const BarContainer = styled.div`
    flex:1;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.color.gray};
    margin: 0 1.5rem;
    position:relative;
    width: 100%;
`

export const Bar = styled.div`
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.color.green};
    width: ${(props) => props.width}%;
`

export const BarValue = styled.span`
    font-size:1rem;
    left: ${(props) => props.left}%;
    position: absolute;
    top:12px; 
    transform: translateX(-50%);
`
