import styled from 'styled-components'

export const ExperienceBarContainer = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 1rem;
    width: 70%;
`

export const ExperienceBarText = styled.span`
    font-size:1rem;
`
export const ExperienceBarSlider = styled.div`
    flex:1;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.color.gray};
    margin: 0 1.5rem;
    position:relative;
    width: 100%;
`
export const ExperienceBarCurrent = styled.span`
    font-size:1rem;
    left: ${(props) => props.left};
    position: absolute;
    top:12px; 
    transform: translateX(-50%);
`
export const ExperienceBar = styled.div`
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.color.green};
    width: ${(props) => props.width}%;
`

