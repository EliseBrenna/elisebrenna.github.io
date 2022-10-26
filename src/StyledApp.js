import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
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
  width: 80%;
  height: 10%;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #040631;
  padding: 2rem 0;

  @media (max-width: 700px) {
    height: auto;
    flex-wrap: wrap;
  }
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    padding-top: 4rem;
  }

  li {
    border-radius: 50px;
    padding: 0.6rem;
    transition: transform 450ms;
    margin: 0 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
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
  cursor: none;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;
