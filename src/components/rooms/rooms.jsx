import "./rooms.css"
import { Outlet, Link } from "react-router-dom";

const Rooms = ({ imageSrc, text }) => {
  return (
    <div className="roomsContainer">
    <div>
        <img className="imgDiv" src={imageSrc} alt={text} />
    </div>
      
      <div className="textDiv">
        <h3>{text}</h3>
      </div>
      
    </div>
  );
};

export default Rooms;