import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Vera = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Vera</h2>
          <p>
            Vera som et område er delt inn i to seksjoner og postnumre, landsbyen
            (Pueblo) og stranden (Playa). Vera Pueblo er en velstående by seks
            kilometer fra kysten og har så mye å tilby, med mange butikker,
            restauranter rike på tradisjonelt håndverk og fristende mat,
            inkludert spansk tapas.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2509693&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Vera.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Vera;
