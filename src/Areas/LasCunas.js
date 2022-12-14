import {
    StyledContainer,
    ImgContainer,
    Heading,
    Content,
    Text,
  } from "../StyledContainer";
  
  const LasCunas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
    return (
      <StyledContainer>
        <Content>
          <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
          <Text>
            <h2>La Cunas</h2>
            <p>La Cunas er en landsby som ligger i Cuevas del Almanzora.</p>
            <p>
              Trykk{" "}
              <a
                href="https://mojacarestates.com/search?ss=s&t=2515405&y=&d=&c=&s=&nb=&mb=&na=&ma=&ms=&np=&mp=&fm=&to="
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                her
              </a>{" "}
              for å se tilgjengelige objekter i La Mulería.
            </p>
          </Text>
        </Content>
      </StyledContainer>
    );
  };
  
  export default LasCunas;