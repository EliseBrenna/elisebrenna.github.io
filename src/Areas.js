import {
  StyledContainer,
  Content,
  ImgContainer,
  ImageGrid,
} from "./StyledContainer";
import Grid from "@mui/material/Grid";
import BeachSrc from "./beach.jpg";
import Aguilas from "./aguilas.jpg"
import Allariz from "./allariz.jpg"
import Bedar from "./bedar.jpg"
import Turre from "./turre.jpg"

const Areas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <ImageGrid>
            <img src={Aguilas} />
              <div>Aguilas</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={Allariz} />
              <div>Aljariz</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={Bedar} />
              <div>Bedar</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={Turre} />
              <div>Cabrera</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Cala Panizo</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Carboneras</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Cueas del Almanzora</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <div>El Pozo del Esparto</div>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Garrucha</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Huercal-Overa</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>La Muleria</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Las Cunas</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Los Gallardos</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Los Lobos</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Lubrin</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Mojacar</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Palomares</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Puerto Rey</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Pulpi</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>San Juan de los Terreros</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Sorbas</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Turre</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Urcal</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Vera</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Vera Playa</div>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <div>Villaricos</div>
            </ImageGrid>
          </Grid>
        </Grid>
      </Content>
    </StyledContainer>
  );
};

export default Areas;
