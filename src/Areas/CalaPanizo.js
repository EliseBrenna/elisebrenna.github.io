import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const CalaPanizo = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Cala Panizo</h2>
          <p>
            Dette er et område med et herlig mikroklima. Området rundt består av
            fantastisk natur, kontrasterende fjell mot grønne jorder og
            sandstrender. Du vil finne en hel rekke strender samt bukter å
            utforske.
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
            for å se tilgjengelige objekter i Cala Panizo.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default CalaPanizo;
