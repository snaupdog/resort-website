import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import imgboat from "./../assets/boat.jpeg";
import imgswim from "./../assets/swimming.jpg";
import imgconf from "./../assets/conference.jpeg";
import imgsurf from "./../assets/surfing.jpeg";
import imggym from "./../assets/gym1.jpg";
import imgspa from "./../assets/spa.jpeg";
// import imgswim from "./../assets/swimming.jpg";
// import imgswim from "./../assets/swimming.jpg";
// import imgswim from "./../assets/swimming.jpg";

import "../styles/facilities.css";
export default function Facilities() {
  return (
    <>
      <Navbar />

      <div className="facilities_background">
        <h1 className="text1">FACILITIES</h1>
      </div>
      <div className="size20vh" />
      <div className="size20vh">
        <h1 id="amenities">Our amenities</h1>
      </div>
      <div className="size20vh" />
      <div className="facilities_container">
        <div className="activities">
          <img src={imgswim} />
          <p>Gym</p>
        </div>
        <div className="activities">
          <img src={imggym} />
          <p>Swimming Pool</p>
        </div>
        <div className="activities">
          <img src={imgspa} />
          <p>Spa</p>
        </div>
        <div className="activities">
          <img src={imgboat} />
          <p>Boat Tours</p>
        </div>
        <div className="activities">
          <img src={imgconf} />
          <p>Conference Room</p>
        </div>
        <div className="activities">
          <img src={imgsurf} />
          <p>Surfing Lessons</p>
        </div>
      </div>
      <div className="secbody">
        <div className="image-track">
          <img className="img" src={imgboat} />
          <img className="img" src={imgboat} />
          <img className="img" src={imgconf} />
          <img className="img" src={imgspa} />
          <img className="img" src={imgsurf} />
          <img className="img" src={imgswim} />
          <img className="img" src={imgboat} />
          <img className="img" src={imgboat} />
        </div>
      </div>

      <Footer />
    </>
  );
}
