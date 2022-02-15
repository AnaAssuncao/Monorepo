import styled from 'styled-components'

export const ProfileContainer = styled.div`
    display:flex;
    align-items:center;
`

export const ProfileImg = styled.img`
    border: 2px solid ${(props) => props.theme.color.gray};
    border-radius:70px;
    display:flex;
    align-items:center;
    height: 100px;
    margin-right:1.5rem;
    width: 100px;
`

export const ProfileName = styled.input`
    background-color: ${(props) => props.theme.color.background};
    border-bottom: 2px solid ${(props) => props.theme.color.gray};
    color: ${(props) => props.theme.color.title};
    font-size:1.5rem;
    font-weight:600;
`

export const ProfileLevel = styled.div`
    color: ${(props) => props.theme.color.title};
    font-size:1rem;
    margin-top:0.5rem;
`