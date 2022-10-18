import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Sorbas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Sorbas</h2>
          <p>
            Sorbas er en kommune i Almería-provinsen, også kjent som Cuenca la Chica. Det er en ekstremt
            imponerende landsby. Det ligger på et lite platå over Río Aguas, og
            dets hvite hus henger nesten over ravinen.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2510793&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Sorbas.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Sorbas;
