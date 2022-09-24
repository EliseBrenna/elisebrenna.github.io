import styled from "styled-components";

export const StyledApp = styled.div`
  font-family: "Inter", sans-serif;
  padding: 0.5rem 4rem 0rem 4rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 32%,
    rgba(234, 191, 57, 0.46124387254901966) 67%,
    rgba(4, 6, 49, 0.486453956582633) 96%
  );
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
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  color: #040631;
  padding-bottom: 3rem;
  padding-top: 2rem;
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  display: flex;
  width: 20%;
  justify-content: space-between;

  li {
    border-radius: 50px;
    padding: 0.4rem;
    transition: transform 450ms;

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

export const Ingres = styled.div`
padding-top: 1rem;
padding-bottom: 2rem;
font-weight: 500;
  font-size: 1.2rem;
  color: #040631
`;
