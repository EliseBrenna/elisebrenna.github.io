import styled from "styled-components";

const StyledAbout = styled.div`
  display: flex;
  height: 78%;
  color: #040631;
  margin: 2% 4%;
  justify-content: space-between;

  a {
    color: inherit;
    cursor: none;
    :visited {
      color: inherit;
    }
  }

  img {
    height: 80%;
    padding-top: 1rem;
  }

  h2 {
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 1.1;
    padding-bottom: 1rem;
  }

  p {
    line-height: 1.5;
    font-size: 1.1rem;
  }
`;

export default StyledAbout;
