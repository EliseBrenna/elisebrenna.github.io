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
import { NavLink } from "react-router-dom";

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
                <NavLink to="/bedar">Bédar</NavLink>
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
                <NavLink to="/huercalovera">Huércal-Overa</NavLink>
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
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/lubrin">Lubrin</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/mojacar">Mojacar</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/palomares">Palomares</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/puertorey">Puerto Rey</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/pulpi">Pulpi</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/sanjuan">San Juan de los Terreros</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/sorbas">Sorbas</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/turre">Turre</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/urcal">Urcal</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/vera">Vera</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/veraplaya">Vera Playa</NavLink>
              </li>
            </ImageGrid>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <ImageGrid>
              <img src={BeachSrc} />
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <NavLink to="/villaricos">Villaricos</NavLink>
              </li>
            </ImageGrid>
          </Grid>
        </Grid>
      </Content>
    </StyledContainer>
  );
};

export default Areas;
