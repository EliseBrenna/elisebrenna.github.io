import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const LosGallardos = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Los Gallardos</h2>
          <p>
            Landsbyen Los Gallardos er omgitt av landlig landskap og ligger i
            en bred dal mellom fjellkjeden Sierra Cabrera og åslandsbyen Bedar i
            Sierra de Bedar. En lett tilgjengelig innlandsdestinasjon som ligger
            rett ved motorveien AP-7 fra Almeria, mindre enn førti minutter med
            bil fra flyplassen, med mange av regionens attraksjoner innen
            rekkevidde, ikke minst strandferiestedene Mojacar, Garrucha og Vera.
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
            for å se tilgjengelige objekter i Los Gallardos.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default LosGallardos;
