import styled from "styled-components";

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

  img {
    width: 90%;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 49%;

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

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  padding: 0.4rem;
  transition: transform 450ms;
  margin: 0;
  font-weight: 500;
  font-size: 1rem;

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
`;
