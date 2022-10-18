import {
  StyledContainer,
  Content,
  ImgContainer,
  Text,
} from "./StyledContainer";
import BeachSrc from "./images/beach.jpg";

const About = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={BeachSrc} /> */}</ImgContainer>
        <Text>
          <h2>Formidling av eiendom på solens kyst</h2>
          <p>
            <p>
              Ja, med 306 soldager i året velger vi å kalle Spanias østkyst
              nettopp dette.
            </p>
            Vi er et norsk selskap som samarbeider med{" "}
            <a
              href="https://mojacarestates.com/"
              target="_blank"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              Mojacar Estates
            </a>
            , en av de mest solide eiendomsmeglere og utbyggere i
            Andalusía/Almería-regionen i Spania. Mojacar Estates tilbyr boliger
            for kjøp og leie – både kort og langtidsutleie. Porteføljen
            inneholder også småbruk og mulighet for kjøp av tomt. Innehaver av
            Sunrise Homes har forøvrig hatt egen leilighet i Mojacar siden 2003
            og kjenner derfor området meget godt. Med vår eksklusive
            formidlingsavtale med Mojacar Estates ønsker vi norske kunder
            hjertelig velkommen, da dette fantastiske området som kalles "<em>the
            real Spain</em>" og "<em>a place in the sun</em>" bare må oppleves.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default About;
