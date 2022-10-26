import {
  StyledContainer,
  Content,
  ImgContainer,
  Text,
  Button,
} from "./StyledContainer";
import BeachSrc from "./images/beach.jpg";
import SunriseSrc from "./images/sunrise.jpg";

const About = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>
          <img src={SunriseSrc} />
        </ImgContainer>
        <Text>
          <h2>
            Formidling av eiendom <br /> på solens kyst
          </h2>
          <p>
            Ja, med 306 soldager i året velger vi å kalle Spanias østkyst
            nettopp dette. Vi er et norsk selskap som samarbeider med{" "}
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
            for kjøp og porteføljen inneholder også småbruk og mulighet for kjøp
            av tomt. Innehaver av Sunrise Homes har forøvrig hatt egen leilighet
            i Mojacar siden 2003 og kjenner derfor området meget godt. Med vår
            eksklusive formidlingsavtale med Mojacar Estates ønsker vi norske
            kunder hjertelig velkomne til dette fantastiske området som omtales
            som «The Real Spain» og «A Place In The Sun».
          </p>
          <Button
            primary
            to="/omrader"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Se områder
          </Button>
          <Button
            to="/kontakt"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Kontakt oss
          </Button>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default About;
