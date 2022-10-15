import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const CuevasDelAlmanzora = ({
  textEnter,
  textLeave,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Cuevas Del Almanzora</h2>
          <p>
            Cuevas de Almanzora skylder navnet sitt til hulene (cuevas) og
            Almanzora-elven som renner gjennom den, og tilbyr besøkende et rikt
            utvalg av ting å gjøre, inkludert en utflukt til hulehusene i
            Calguerín. Blant over 200 utgravde grotter i den steinete
            klippeveggen, har noen blitt satt opp som landlige
            overnattingssteder, og en som museum
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
            for å se tilgjengelige objekter i Cuevas Del Almanzora.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default CuevasDelAlmanzora;
