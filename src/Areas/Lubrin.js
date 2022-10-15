import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Lubrin = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Lubrin</h2>
          <p>
            Lubrin er både en landsby og en kommune, som ligger i Sierra
            Los Filabres. Den rolige landsbyen er
            et utmerket reisemål for de som søker et tradisjonelt andalusisk
            gjemmested. Beliggende rundt 45 kilometer fra strendene ved Mojacar
            og 72 kilometer fra byen Almeria.
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
            for å se tilgjengelige objekter i Los Lobos.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Lubrin;
