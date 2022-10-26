import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled.div`
  color: #040631;
  width: 80%;
  height: 100%;

  a {
    color: inherit;
    cursor: none;
    :visited {
      color: inherit;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 3rem;
`;

export const ImgContainer = styled.div`
  width: 45%;
  padding-right: 2rem;

  @media (max-width: 700px) {
    display: none;
  }

  img {
    width: 90%;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 49%;

  @media (max-width: 700px) {
    width: 100%;
  }

  h2 {
    font-weight: 400;
    font-size: 2.2rem;
    margin-bottom: 2.1rem;
    margin-top: 0;
    width: 100%;
    
  }

  p {
    margin: 0;
    padding-bottom: 2rem;
    line-height: 1.5;
    width: 100%;
  }

  .ingress {
    margin-bottom: 2rem;
  }
`;

export const ImageGrid = styled.div`
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    opacity: 50%;
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
    text-align: center;
  }

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
    text-align: center;
  }

  li {
    list-style-type: none;
  }
`;

export const Button = styled(NavLink)`
  border-radius: 50px;
  border: none;
  padding: 0.6rem;
  transition: transform 450ms;
  text-decoration: none;
  margin: 0;
  font-weight: 500;
  font-size: 1.2rem;
  background-color: ${(props) => (props.primary ? `#040631` : `white`)};
  color: ${(props) => (props.primary ? `white` : `#040631`)} !important;
  box-shadow: 0px 0px 0px 2px #040631 inset;
  font-family: "Inter";
  margin-right: 3rem;
  margin-top: 2rem;

  :hover {
    transform: translateY(-2px);
  }
`;
