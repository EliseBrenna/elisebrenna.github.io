import MapPNG from "./images/map.png";
import StyledMap from "./StyledMap";

const Map = ({textEnter, textLeave, onMouseEnter, onMouseLeave}) => {
  return (
    <StyledMap>
        <div className="pin" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name" onMouseEnter={textEnter} onMouseLeave={textLeave} >Carboneras</a>

        <div className="pin mojacar" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name mojacarname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Mojacar</a>

        <div className="pin garrucha" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name garruchaname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Garrucha</a>

        <div className="pin vera" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name veraname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Vera</a>

        <div className="pin cabrera" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name cabreraname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Cabrera</a>

        <div className="pin losgallardos" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name losgallardosname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Los Gallardos</a>

        <div className="pin antas" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name antasname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Antas</a>

        <div className="pin calapanizo" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name calapanizoname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Cala Panizo</a>

        <div className="pin aguilas" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name aguilasname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Águilas</a>

        <div className="pin pulpi" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name pulpiname" onMouseEnter={textEnter} onMouseLeave={textLeave} >Pulpi</a>


        <div className="pin sanjuan" onMouseEnter={textEnter} onMouseLeave={textLeave} ></div>
        <a className="pin-name sanjuanname" onMouseEnter={textEnter} onMouseLeave={textLeave} >San Juan De Los Terreros</a>

      <img src={MapPNG} alt="map" />
    </StyledMap>
  );
};

export default Map;
