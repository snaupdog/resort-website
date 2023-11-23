import "./rooms.css";
import { Outlet, Link } from "react-router-dom";

const Rooms = ({ imageSrc, name, desc, price }) => {
  return (
    <div id="info">
      <div className="roomsContainer">
        <div>
          <img className="imgDiv" src={imageSrc} />
        </div>

        <div className="textDiv">
          <h3>{name}</h3>
        </div>
      </div>

      <div className="infoBox">
        <div>
          <br />
          <br />
          <br />
          <br />
          <h1
            style={{
              fontSize: "30px",
              color: "#8c7c58",
            }}
          >
            {name}
          </h1>

          <br />
        </div>

        <div>
          <h3
            style={{
              fontSize: "20px",
              color: "#8c7c58",
            }}
          >
            {desc}
          </h3>

          <br />
        </div>

        <div>
          <h3
            style={{
              fontSize: "30px",
              textAlign: "right",
              marginRight: "20px",

              color: "#8c7c58",
            }}
          >
            {price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
