import { Logo, StyledApp, NavBar, Menu, MenuItems } from "./StyledApp";
import LogoSrc from "./logo.png";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledApp>
      <NavBar>
        <Logo src={LogoSrc} />
        <Menu
          aria-controls="jkl-example-menu-placeholder"
          id="jkl-example-hamburger"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          actionLabel={undefined}
        />
        <div
          id="jkl-example-menu-placeholder"
          aria-labelledby="jkl-example-hamburger"
          role="group"
          hidden={!isOpen}
        >
          Menyinnholdet ville vært inni et element med disse attributtene
        </div>
        <MenuItems></MenuItems>
      </NavBar>
    </StyledApp>
  );
}

export default App;
