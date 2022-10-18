import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Mojacar = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Mojacar</h2>
          <p>
            Den mauriske gamlebyen i Mojacar ligger høyt oppe på en høyde med
            utsikt over 17 km med uberørte strender. På avstand ser byen ut som
            en tradisjonell andalusisk sukkerbitlandsby som klamrer seg til
            sidene av bakketoppen. 
            Gamlebyen gir fantastisk utsikt til fjellene, havet og
            Taberna-ørkenen. Mojacar Playa som ligger nedenfor den gamle
            landsbyen gir en helt annen atmosfære; en moderne livlig ferieby som
            har blitt smakfullt utviklet i tråd med den tradisjonelle følelsen
            av området, med 9 kilometer med sandstrender og flotte fasiliteter –
            restauranter, tradisjonelle barer, butikker, villaer og leiligheter
            langs strandpromenaden.
          </p>
          <p>
            Trykk{" "}
            <a
              href="https://mojacarestates.com/search?ss=s&t=2513786&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              her
            </a>{" "}
            for å se tilgjengelige objekter i Mojacar.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Mojacar;
