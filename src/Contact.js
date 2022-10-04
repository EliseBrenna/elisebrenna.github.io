import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "./StyledContainer";
import MojacarSrc from "./mojacar.jpg";
import Mojacar2Src from "./mojacar2.jpg";

const Contact = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>
          {/* <img src={Mojacar2Src} /> */}
        </ImgContainer>
        <Text>
          <h2>Vi vil gjerne prate med deg</h2>
          <p>Har du spørsmål eller er du rett og slett bare litt nysgjerrig? <br/>Ikke nøl med å ta kontakt – helt uforpliktende så klart.
          <p>Trykk <a
            href="mailto:post@sunrisehomes.no"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >her</a> for e-post eller ring 12345678.</p>
          </p>
         
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Contact;
