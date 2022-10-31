import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "./StyledContainer";
import StreetsSrc from "./images/streets.jpg";

const Contact = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer> <img src={StreetsSrc} /></ImgContainer>
        <Text>
          <h2>Vi vil gjerne høre fra deg</h2>
          <p>
            Har du spørsmål eller er du rett og slett bare litt nysgjerrig?{" "}
            <br />
            Ikke nøl med å ta kontakt – helt uforpliktende så klart.
          </p>
          <p>
            E-post: post@sunrisehomes.no
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Contact;
