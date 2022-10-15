import { Logo, StyledApp, NavBar, MenuItems, Ingres } from "./StyledApp";
import LogoSrc from "./images/logo.png";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Map from "./Map";
import Contact from "./Contact";
import Areas from "./Areas/Areas";
import Aguilas from "./Areas/Aguilas";
import Aljariz from "./Areas/Aljariz";
import Bedar from "./Areas/Bedar";
import Cabrera from "./Areas/Cabrera";
import CalaPanizo from "./Areas/CalaPanizo";
import Carboneras from "./Areas/Carboneras";
import ElPozoDelEsparto from "./Areas/ElPozoDelEsparto";
import CuevasDelAlmanzora from "./Areas/CuevasDelAlmanzora";
import HuercalOvera from "./Areas/HuercalOvera";
import LaMuleria from "./Areas/LaMuleria";
import Garrucha from "./Areas/Garrucha";
import LasCunas from "./Areas/LasCunas";
import LosGallardos from "./Areas/LosGallardos";
import LosLobos from "./Areas/LosLobos";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4.5,
      y: mousePosition.y - 4.5,
      backgroundColor: "#040631",
    },
    text: {
      height: 9,
      width: 9,
      x: mousePosition.x - 4.5,
      y: mousePosition.y - 4.5,
      backgroundColor: "#eabf39",
      mixBlendMode: "revert",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <BrowserRouter>
      <StyledApp>
        <NavBar>
          <Logo src={LogoSrc} />
          <MenuItems>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <NavLink to="/">Hjem</NavLink>
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <NavLink to="/om">Om</NavLink>
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <NavLink to="/omrader">Områder</NavLink>
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <NavLink to="/kontakt">Kontakt oss</NavLink>
            </li>
          </MenuItems>
        </NavBar>

        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Map
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/om"
            element={
              <About
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/omrader"
            element={
              <Areas
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/kontakt"
            element={
              <Contact
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/aguilas"
            element={
              <Aguilas
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/aljariz"
            element={
              <Aljariz
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/bedar"
            element={
              <Bedar
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/cabrera"
            element={
              <Cabrera
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/calapanizo"
            element={
              <CalaPanizo
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/carboneras"
            element={
              <Carboneras
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/cuevasdelalmanzora"
            element={
              <CuevasDelAlmanzora
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/elpozodelesparto"
            element={
              <ElPozoDelEsparto
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/garrucha"
            element={
              <Garrucha
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/huercalovera"
            element={
              <HuercalOvera
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/lamuleria"
            element={
              <LaMuleria
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/lascunas"
            element={
              <LasCunas
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/losgallardos"
            element={
              <LosGallardos
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
          <Route
            path="/loslobos"
            element={
              <LosLobos
                onMouseEnter
                onMouseLeave
                textEnter={textEnter}
                textLeave={textLeave}
              />
            }
          />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
