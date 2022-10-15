import {
  StyledContainer,
  Content,
  ImgContainer,
  ImageGrid,
} from "../StyledContainer";
import Grid from "@mui/material/Grid";
import BeachSrc from "../images/beach.jpg";
import Aguilas from "../images/aguilas.jpg";
import Allariz from "../images/allariz.jpg";
import Bedar from "../images/bedar.jpg";
import Turre from "../images/turre.jpg";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Areas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={Aguilas} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/aguilas">Águilas</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={Allariz} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/aljariz">Aljariz</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={Bedar} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/bedar">Bedar</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={Turre} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/cabrera">Cabrera</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/calapanizo">Cala Panizo</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/carboneras">Carboneras</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/cuevasdelalmanzora">Cuevas Del Almanzora</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/elpozodelesparto">El Pozo Del Esparto</NavLink>
              </li>
            </ImageGrid>
          </Grid>
          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/garrucha">Garrucha</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/huercalovera">Huercal-Overa</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/lamuleria">La Muleria</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/lascunas">Las Cunas</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/losgallardos">Los Gallardos</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/loslobos">Los Lobos</NavLink>
              </li>
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
