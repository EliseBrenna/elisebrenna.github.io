import styled from 'styled-components';
import { Hamburger } from "@fremtind/jkl-hamburger-react";
import "@fremtind/jkl-hamburger/hamburger.min.css";

export const StyledApp = styled.div`
font-family: 'Inter', sans-serif;
padding: 0.5rem 4rem;
height: 100vh;
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 32%, rgba(234,191,57,0.46124387254901966) 67%, rgba(4,6,49,0.486453956582633) 96%);
`;

export const NavBar = styled.div`
height: 10rem;
display: flex;
align-items: center;
justify-content: space-between;
font-weight: 500;
color: #040631;

`;

export const Menu = styled(Hamburger)`
color:  #040631;

.jkl-hamburger__lines, .jkl-hamburger__lines::before, .jkl-hamburger__lines::after {
    height: 0.2rem;
}
`;

export const MenuItems = styled.ul`
list-style-type: none;
display: flex;
width: 50%;
justify-content: space-between;

li {

}
`;

export const Logo = styled.img`
height: 5rem;
`;