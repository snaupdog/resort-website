import "./rooms.css"
import { Outlet, Link } from "react-router-dom";

const Rooms = ({ imageSrc, text }) => {
  return (
    <div className="container">
      <img src={imageSrc} alt={text} />
      {/* <h4>{text}</h4> */}
    </div>
  );
};

export default Rooms;