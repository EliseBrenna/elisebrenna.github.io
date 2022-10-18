import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Palomares = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Palomares</h2>
          <p>
            Bare 1 km fra kysten, beholder landsbyen Palomares et spansk preg
            stort sett upåvirket av kystutviklingen i området. Landsbyen faller
            innenfor Cuevas del Almanzora kommune. Palomares er ideelt plassert
            for golfere; Desert Springs (5 minutter), Valle del Este (20
            minutter) og Marina de la Torre (20 minutter). Landsbyen har ulike
            butikker, banker, lege, apotek og en rekke spanske barer som tilbyr
            tapas og småretter.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2512967&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Palomares.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Palomares;
