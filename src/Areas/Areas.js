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
  backgroundColor: "white",
  padding: theme.spacing(5),
  textAlign: "center",
  borderRadius: "1rem",
  maxHeight: "1rem",
  listStyleType: "none",
  color: "#040631",
  boxShadow: "0 0.2rem 0.9375rem #252a311a",
}));

const Areas = ({ textEnter, textLeave, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledContainer>
      <Content>
        <Grid container spacing={8}>
          <Grid item xs={6} md={3}>
            <NavLink to="/aguilas">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Águilas</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <NavLink to="/aljariz">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Aljariz</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <NavLink to="/bedar">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Bédar</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <NavLink to="/cabrera">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Cabrera</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <NavLink to="/calapanizo">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Cala Panizo</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <NavLink to="/carboneras">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Carboneras</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <NavLink to="/cuevasdelalmanzora">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Cuevas Del Almanzora</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            <NavLink to="/elpozodelesparto">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>El Pozo Del Esparto</li>
              </Item>
            </NavLink>
          </Grid>
          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/garrucha">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Garrucha</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/huercalovera">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Huércal-Overa</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/lamuleria">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>La Muleria</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/lascunas">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Las Cunas</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/losgallardos">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Los Gallardos</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/loslobos">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Los Lobos</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/lubrin">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Lubrin</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/mojacar">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Mojacar</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/palomares">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Palomares</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/puertorey">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Puerto Rey</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/pulpi">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Pulpi</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/sanjuan">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>San Juan de los Terreros</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/sorbas">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Sorbas</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/turre">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Turre</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/urcal">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Urcal</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/vera">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Vera</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/veraplaya">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Vera Playa</li>
              </Item>
            </NavLink>
          </Grid>

          <Grid item xs={6} md={3}>
            {" "}
            <NavLink to="/villaricos">
              <Item onMouseEnter={textEnter} onMouseLeave={textLeave}>
                <li>Villaricos</li>
              </Item>
            </NavLink>
          </Grid>
        </Grid>
      </Content>
    </StyledContainer>
  );
};

export default Areas;
