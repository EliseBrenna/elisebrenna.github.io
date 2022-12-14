import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const Aguilas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>Águilas</h2>
          <p>
            Águilas er en herlig havneby som ligger på Costa Cálida. En
            tradisjon for sjøfart kombineres nå med et bredt spekter av
            turistfasiliteter, som gjør det meste ut av en av
            hovedattraksjonene, den omfattende kystlinjen.
          </p>
          <p>Trykk <a
            href="https://mojacarestates.com/search?ss=s&t=2522333&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >her</a> for å se tilgjengelige eiendommer i Aguilas.</p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default Aguilas;
