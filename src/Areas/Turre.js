import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Turre = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Turre</h2>
          <p>
            Turre er en liten by som ligger under det våkne blikket til
            fjellkjeden Sierra Cabrera. Nær Mojacar, men med en egen identitet.
            Turre i dag er en travel by med et stort lokalsamfunn og
            mange butikker, barer og andre forretninger langs hovedgaten. Et
            eksepsjonelt marked holdes hver fredag hvor lokale produsenter
            tilbyr frukt, grønnsaker og mange andre varer til svært rimelige
            priser.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2510124&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Turre.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Turre;
