import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
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
          <img src="img/gym1.jpg" />
          <p>Gym</p>
        </div>
        <div className="activities">
          <img src="img/swimming.jpg" />
          <p>Swimming Pool</p>
        </div>
        <div className="activities">
          <img src="img/spa.jpeg" />
          <p>Spa</p>
        </div>
        <div className="activities">
          <img src="img/boat.jpeg" />
          <p>Boat Tours</p>
        </div>
        <div className="activities">
          <img src="img/conference.jpeg" />
          <p>Conference Room</p>
        </div>
        <div className="activities">
          <img src="img/surfing.jpeg" />
          <p>Surfing Lessons</p>
        </div>
      </div>
      <div className="secbody">
        <div className="image-track">
          <img clas="img" src="img/boat.jpeg" />
          <img className="img" src="img/conference.jpeg" />
          <img className="img" src="img/diving.jpeg" />
          <img className="img" src="img/surfing.jpeg" />
          <img className="img" src="img/diving.jpeg" />
          <img className="img" src="img/img1.png" />
          <img className="img" src="img/gym1.jpg" />
          <img className="img" src="img/spa.jpeg" />
        </div>
      </div>

      <Footer />
    </>
  );
}
