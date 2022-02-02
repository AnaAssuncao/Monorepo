import styled from 'styled-components'

export const Overlay = styled.div`
    background: rgba(242,243,245,0.8);
    position:fixed;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const LevelUp= styled.div`
    background:${(props) => props.theme.color.white};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0,0.05);
    text-align: center;
    position: relative;

`

export const LevelUpTitle= styled.h2`
    font-size: 8.75rem;
    font-weight:600;
    color: ${(props) => props.theme.color.blue};
`

export const LevelUpTSubtitle= styled.span`
    font-size:2.25rem;
    color: ${(props) => props.theme.color.title};
    margin-top:0.25rem;
`
