import styled from 'styled-components'

export const NavBarContainer = styled.header`
    align-items: center;
    box-shadow: 0px 1px 5px #ebebeb;
    display: flex;
    height:5%;
    justify-content: center;
    padding: 0 100px;
    width:100%;
    z-index: 1;
`
export const NavBarContent = styled.header`
    align-items: center;
    display: flex;
    justify-content: center;
`

export const NavBarLogo = styled.h1`
    color: ${(props) => props.theme.color.black};
    font-size:36px;
`

export const NavBarImg = styled.img`
    width:32px;
    margin-right: 12px;
`