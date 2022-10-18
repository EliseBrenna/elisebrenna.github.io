import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Aljariz = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Aljariz</h2>
          <p>
            Aljariz helt øst i Almeria-provinsen, ligger i den brede, fruktbare
            dalen Rio Antas, omtrent 15 kilometer fra Middelhavskysten. Aljariz er
            omgitt av små markedshager som dyrker salatgrønnsaker, bønner, erter
            og kål og frukthager kjent for sine appelsiner og sitroner.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2521962&y=&nb=&mb=&na=&ma=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Aljariz.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Aljariz;
