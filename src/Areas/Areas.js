import {
  StyledContainer,
  Content,
  ImgContainer,
  ImageGrid,
} from "../StyledContainer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import BeachSrc from "../images/beach.jpg";
import Aguilas from "../images/aguilas.jpg";
import Allariz from "../images/allariz.jpg";
import Bedar from "../images/bedar.jpg";
import Turre from "../images/turre.jpg";
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#040631;",
  padding: theme.spacing(5),
  textAlign: "center",
  borderRadius: "1rem",
  height: "2rem",
  listStyleType: "none",
  color: "white",
}));

const Areas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <Grid container spacing={8}>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/aguilas">Águilas</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/aljariz">Aljariz</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/bedar">Bédar</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/cabrera">Cabrera</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/calapanizo">Cala Panizo</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/carboneras">Carboneras</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/cuevasdelalmanzora">Cuevas Del Almanzora</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/elpozodelesparto">El Pozo Del Esparto</NavLink>
              </li>
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/garrucha">Garrucha</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/huercalovera">Huércal-Overa</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/lamuleria">La Muleria</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/lascunas">Las Cunas</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/losgallardos">Los Gallardos</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/loslobos">Los Lobos</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/lubrin">Lubrin</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/mojacar">Mojacar</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/palomares">Palomares</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/puertorey">Puerto Rey</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/pulpi">Pulpi</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/sanjuan">San Juan de los Terreros</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/sorbas">Sorbas</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/turre">Turre</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/urcal">Urcal</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/vera">Vera</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/veraplaya">Vera Playa</NavLink>
              </li>
            </Item>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <li>
                <NavLink to="/villaricos">Villaricos</NavLink>
              </li>
            </Item>
          </Grid>
        </Grid>
      </Content>
    </StyledContainer>
  );
};

export default Areas;
