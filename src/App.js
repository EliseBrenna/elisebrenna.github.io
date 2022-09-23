import { Logo, StyledApp, NavBar, MenuItems } from './StyledApp';
import LogoSrc from './logo.png';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <StyledApp>
          <AnimatedCursor
      outerSize={8}
      color='4, 6, 49'
      outerAlpha={0}
      innerScale={0.7}
      innerSize	={8}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <NavBar>
      <Logo src={LogoSrc}/>
      <MenuItems>
      <li>Om</li>
      <li>Områder</li>
      <li>Kontakt</li>
      </MenuItems>
      </NavBar>

    </StyledApp>
  );
}

export default App;
