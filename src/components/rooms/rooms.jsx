import "./rooms.css"
import { Outlet, Link } from "react-router-dom";

const Rooms = ({ imageSrc,name,desc,price}) => {
  return (
    <div id="info">

      <div className="roomsContainer">
        <div>
            <img className="imgDiv" src={imageSrc}/>
        </div>

        <div className="textDiv">
          <h3>{name}</h3>
          <button className="press">+</button>
          <button className="press">-</button>
        </div>
        
      </div>

      <div className="infoBox">
        <div>
          <h1>{name}</h1>
        </div>

        <div>
          <h3>{desc}</h3>
        </div>

        <div>
          <h3>{price}</h3>
        </div>

      </div>

    </div>
  );
};

export default Rooms;