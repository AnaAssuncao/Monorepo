import styled from 'styled-components'

export const NavBarContainer = styled.header`
    align-items: center;
    box-shadow: 0px 1px 5px #ebebeb;
    display: flex;
    height:5%;
    justify-content: space-between;
    padding: 0 100px;
    widht:100%;
`

export const NavBarLogo = styled.h1`
    color: #0097ff;
    font-size:36px;
`

export const NavBarMenu = styled.ul`
    align-items: center;
    display: flex;
`

export const NavBarItem= styled.li`
    list-style-type: none;
    margin-right:30px;   
`

export const NavBarText= styled.p`
    color: #0097ff;
    cursor:pointer;
    font-size:18px;
    text-decoration: none;
`
