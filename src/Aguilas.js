import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "./StyledContainer";

const Aguilas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Aguilas</h2>
          <p>
            Águilas er en herlig havneby som ligger på Costa Cálida. En
            tradisjon for sjøfart kombineres nå med et bredt spekter av
            turistfasiliteter, som gjør det meste ut av en av
            hovedattraksjonene, den omfattende kystlinjen.
          </p>
          <p>Trykk her for å se tilgjengelige eiendommer i Aguilas.</p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Aguilas;
