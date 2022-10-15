import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Garrucha = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Garrucha</h2>
          <p>
            Garrucha er en gammel og veletablert by med opprinnelse tilbake til
            1500-tallet da den ble grunnlagt av en gruppe fiskere som beskyttet
            seg mot piratangrep ved å bygge et tårn. Den har en vakker promenade
            som går langs hele byen med brede sandstrender som strekker seg til
            krystallklart vann på den ene siden og palmer, restauranter,
            kafeer, butikker og byen på den andre. Som alle
            spanske byer, er det mange fester med fargerike parader som slynger
            seg gjennom byen til forskjellige tider av året.
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
            for å se tilgjengelige objekter i Garrucha.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Garrucha;
