import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Villaricos = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Villaricos</h2>
          <p>
            Villaricos er en liten, uberørt
            fiskerlandsby, både sjarmerende og rolig, som opprettholder et
            typisk spansk preg. Villaricos har to havner som ligger i hver ende
            av landsbyen forbundet med en bred promenade med mange steder å
            sitte og tenke på. Villaricos er kjent for det krystallklare varme
            vannet og det er fabelaktige dykkemuligheter. Rett bortenfor Villaricos er en robust
            ubebygd kystlinje hvor du kan slappe av i fred og ensomhet blant
            steinbassengene og sanden. Det er et godt utvalg av restauranter og
            barer med mat til svært rimelige priser som spenner fra
            innfødt spansk til britisk pubmat. Det er et veldig populært marked
            hver søndag morgen på torget.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2509495&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Villaricos.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Villaricos;
