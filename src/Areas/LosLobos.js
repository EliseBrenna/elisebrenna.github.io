import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const LosLobos = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Los Lobos</h2>
          <p>Los Lobos er en landsby i Almería.</p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2522333&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Los Lobos.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default LosLobos;
