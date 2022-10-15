import {
  StyledContainer,
  ImgContainer,
  Heading,
  Content,
  Text,
} from "../StyledContainer";

const SanJuan = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <ImgContainer>{/* <img src={Mojacar2Src} /> */}</ImgContainer>
        <Text>
          <h2>San Juan de los Terreros</h2>
          <p>
            San Juan de los Terreros er en kystlandsby som tilhører Pulpí
            kommune. Den er kjent for sine fantastiske strender, de siste i
            Andalusia fordi den neste landsbyen nord er Águilas – den første
            byen på kysten som tilhører regionen Murcia. Overfor kysten i San
            Juan de los Terreros er det to små vulkanske holmer – Terreros
            Island-Black Island Natural Monument. Det mest karakteristiske
            monumentet i byen er San Juan de los Terreros slott, bygget i 1764
            på en odde som har utsikt over mye av kystlinjen til Almería og
            Murcia.
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
            for å se tilgjengelige objekter i San Juan de los Terreros.
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
};

export default SanJuan;
