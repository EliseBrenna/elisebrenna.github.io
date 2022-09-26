import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  font-family: "Inter", sans-serif;
  cursor: none;

  .cursor {
    height: 9px;
    width: 9px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 2;
  }
`;

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #040631;
  margin: 2% 4%;
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;

  li {
    border-radius: 50px;
    padding: 0.4rem;
    transition: transform 450ms;
    margin: 0 1rem;
    
    :hover {
      background-color: #040631;
      color: white;
      transform: translateY(-2px);
    }

    a {
      text-decoration: none;
      color: inherit;
      cursor: none;

      :visited {
        color: inherit;
      }
    }
  }
`;

export const Logo = styled.img`
  height: 4.5rem;
`;
