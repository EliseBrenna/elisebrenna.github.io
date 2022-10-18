import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Cabrera = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Cabrera</h2>
          <p>
            Plassert i fjellkjeden Sierra Cabrera i Andalusias sørøstlige
            provins ligger den unike landsbyen Cabrera. Med sitt utvalg av
            herlige kupler og filigranbuer, er Cabrera et fortryllende,
            innbydende lite gjemmested som fremkaller den rike arkitektoniske
            arven i Andalucia, men likevel inkorporerer alle bekvemmeligheter
            fra det 21. århundres liv. Den fruktbare dalen Cortijo Grande ligger
            ved foten av Sierra Cabrera-fjellene og er vertskap for fantastisk
            utsikt og endeløse spaserturer i det vakre og naturlige landskapet.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=7283862&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Cabrera.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Cabrera;
