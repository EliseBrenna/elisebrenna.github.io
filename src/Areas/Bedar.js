import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Bedar = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Bédar</h2>
          <p>
            Den uberørte hvite landsbyen
            Bédar ligger i en østvendt dal ved foten av Sierra de los Filabres,
            hvis høye topper, på avstand, ser ut til å omslutte byen i en
            vennlig omfavnelse og beskytter byen mot de kjøligere vindene som kan blåse fra nord og vest om vinteren.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2521197&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Bédar.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Bedar;
