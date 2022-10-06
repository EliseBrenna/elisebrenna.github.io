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
  width: 100%;
  box-shadow: 0 0.25rem 0.9375rem #252a311a;
  }
`;
export const Text = styled.div`
display: flex;
flex-wrap: wrap;
height: 100%;
width: 55%;


h2 {
  font-weight: 400;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  margin-top: 0;
  width: 100%;
}

p {
  margin: 0;
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
