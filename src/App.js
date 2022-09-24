import { Logo, StyledApp, NavBar, MenuItems, Ingres } from "./StyledApp";
import LogoSrc from "./logo.png";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import Map from "./Map";
import Contact from "./Contact";
import Areas from "./Areas";
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
          <NavLink to="/"><Logo src={LogoSrc} /></NavLink>
          <MenuItems>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <NavLink to="/om">Om</NavLink>
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <NavLink to="/omrader">Områder</NavLink>
            </li>
            <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </MenuItems>
        </NavBar>

        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />

        <Routes>
          <Route path="/" element={<Map onMouseEnter onMouseLeave textEnter={textEnter} textLeave={textLeave}/>} />
          <Route path="/om" element={<About />} />
          <Route path="/omrader" element={<Areas />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
