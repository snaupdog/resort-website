import "../styles/booking.css";
import SolidNavbar from "../components/solid-navbar/solid-navbar.jsx";
import Background from "../components/background/background.jsx";
import Rooms from "../components/rooms/rooms.jsx";
import Footer from "../components/footer/footer.jsx";

export default function Bookings() {
  return (
    <>
      <SolidNavbar />
      <Background />
      <h2>Rooms & Rates</h2>

      <div className="bookingContainer">
        <div className="roomPics">
          <div>
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              text="Long Ass Paragraph"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=6   0"
              text="Long Ass para v2"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              text="Text V3"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="Img v4"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="V5"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              text="6th one done"
            />
          </div>
        </div>

        <div className="infoContainer">
          <h4>this gay as thing better work</h4>
        </div>
      </div>

      <Footer />
    </>
  );
}
