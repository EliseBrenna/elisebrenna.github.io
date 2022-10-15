import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const ElPozoDelEsparto = ({
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
          <h2>El Pozo Del Esparto</h2>
          <p>
            El Pozo del Esparto ligger i Cuevas Del Almanzora og tilbyr en promenade med sine palmer med utsikt over
            stranden på nesten 2 kilometer. Stranden er sjarmerende og har
            en blanding av fin sand og grus med en imponerende marin rikdom, så
            den er ideell for dykking (kanskje også den beste).
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
            for å se tilgjengelige objekter i El Pozo Del Esparto.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default ElPozoDelEsparto;
