import styled from 'styled-components';

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

export const MenuItems = styled.ul`
list-style-type: none;
display: flex;
width: 20%;
justify-content: space-between;

li {
    border: 1px solid #040631;
    border-radius: 5px;
    padding: 0.4rem;
    transform: 250ms;


    :hover {
        background-color: #040631;
        color: white;
        transform: translateY(-10px);
    }
}
`;

export const Logo = styled.img`
height: 4rem;
`;