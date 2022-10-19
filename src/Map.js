import MapPNG from "./images/map.png";
import StyledMap from "./StyledMap";
import { NavLink } from "react-router-dom";

const Map = ({textEnter, textLeave, onMouseEnter, onMouseLeave}) => {
  return (
    <StyledMap>
        <div className="pin" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name" to="/carboneras" onMouseEnter={textEnter} onMouseLeave={textLeave}>Carboneras</NavLink>

        <div className="pin mojacar" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name mojacarname" to="/mojacar" onMouseEnter={textEnter} onMouseLeave={textLeave}>Mojácar</NavLink>

        <div className="pin garrucha" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name garruchaname" to="/garrucha" onMouseEnter={textEnter} onMouseLeave={textLeave}>Garrucha</NavLink>

        <div className="pin vera" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name veraname" to="/vera" onMouseEnter={textEnter} onMouseLeave={textLeave}>Vera</NavLink>

        <div className="pin cabrera" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name cabreraname" to="/cabrera" onMouseEnter={textEnter} onMouseLeave={textLeave}>Cabrera</NavLink>

        <div className="pin losgallardos" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name losgallardosname" to="/losgallardos" onMouseEnter={textEnter} onMouseLeave={textLeave}>Los Gallardos</NavLink>

        <div className="pin antas" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name aljarizname" to="/aljariz" onMouseEnter={textEnter} onMouseLeave={textLeave}>Aljariz</NavLink>

        <div className="pin calapanizo" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name calapanizoname" to="/calapanizo" onMouseEnter={textEnter} onMouseLeave={textLeave}>Cala Panizo</NavLink>

        <div className="pin aguilas" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name aguilasname" to="/aguilas" onMouseEnter={textEnter} onMouseLeave={textLeave}>Águilas</NavLink>

        <div className="pin pulpi" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name pulpiname" to="/pulpi" onMouseEnter={textEnter} onMouseLeave={textLeave}>Pulpí</NavLink>


        <div className="pin sanjuan" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <NavLink className="pin-name sanjuanname" to="/sanjuan" onMouseEnter={textEnter} onMouseLeave={textLeave}>San Juan de los Terreros</NavLink>

      <img src={MapPNG} alt="map" />
    </StyledMap>
  );
};

export default Map;
