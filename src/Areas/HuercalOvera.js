import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const HuercalOvera = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Huercal-Overa</h2>
          <p>
            Byen ligger mellom to grener av Almanzora-elven. Huércal Overa er en
            markedsby med mye av sentrum som overtas av markedet hver mandag
            morgen. Byen har svært gode fasiliteter med en rekke hoteller,
            restauranter, et moderne sykehus, et kommunalt svømmebasseng og
            fritidssenter. Huércal Overa er godt tjent med
            at motorveinettverket ligger 1 km unna den viktigste
            nord-sør-kystmotorveien.
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
            for å se tilgjengelige objekter i Huercal-Overa.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default HuercalOvera;
