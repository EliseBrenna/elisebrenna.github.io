import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const VeraPlaya = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Vera Playa</h2>
          <p>
            Vera som et område er delt inn i to seksjoner og postnumre,
            landsbyen (Pueblo) og stranden (Playa). Playas de Vera, som navnet
            tilsier, ligger langs kysten og tilbyr et bredt spekter av
            aktiviteter med frodige golfbaner og utsøkte klubbhus, et badeland
            med vannsklier og sklier som snurrer, butikker og selvfølgelig hvite
            sandstrender komplett med palmer og glitrende hav.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=6544370&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Vera Playa.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default VeraPlaya;
