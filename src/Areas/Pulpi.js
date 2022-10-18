import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Pulpi = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Pulpi</h2>
          <p>
            Helt nordøst i Andalucia, innen 1 kilometer fra grensen til Murcia,
            ligger en liten by med skjulte attraksjoner som ville ha forblitt
            praktisk talt ukjent hvis ikke for en bemerkelsesverdig oppdagelse i
            1999. Den største geoden i Europa ble oppdaget i en jern- og blygruve nær byen Pulpi.
            Byen Pulpi ligger omtrent 10 kilometer inn i landet og kommunen
            strekker seg ned til kysten for å inkludere den spanske badebyen San
            Juan de los Terreros
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2512152&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Pulpi.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Pulpi;
