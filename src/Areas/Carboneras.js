import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Carboneras = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Carboneras</h2>
          <p>
            Carboneras er et perfekt reisemål for naturelskere. Besøkende kan
            nyte utsikten, eller utøve friluftsidretter, inkludert fotturer
            eller dykking. Det ligger i naturreservatet Cabo de Gata-Níjar, et
            av de mest tørre beskyttede områdene i Europa og det eneste i
            Andalusia med en kyst, inkludert Los Muertos-stranden, noe som betyr
            at byen også er populær blant de som bare vil å nyte en dag med sol
            og strand.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2522333&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Carboneras.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Carboneras;
