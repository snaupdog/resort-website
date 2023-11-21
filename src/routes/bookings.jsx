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
      <h2 className="bookings-h2">Rooms & Rates</h2>

      <div className="bookingContainer">
        <div className="roomPics">
          <div>
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              name="Cove View Retreat"
              desc=" an intimate escape with an unobstructed view of the secluded cove. Wake up to the gentle lapping of waves and unwind in your private paradise. "
              price="$250"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=6   0"
              name="Sunrise Suite"
              desc="Rise to the Sunrise Serenity Suite, where tranquility meets sophistication. In this elegant space designed for two, witness the dawn break over the horizon."
              price="$280"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              name="Beachfront Bliss"
              desc="Indulge in the ultimate beachside escape. This spacious accommodation offers direct access to soft sands and azure waters. Enjoy spectacular sunsets from your terrace."
              price="$400"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Poolside Oasis"
              desc="Perfect for groups, this room opens up to a vibrant poolside scene. Lounge and dive into the refreshing waters just steps away."
              price="$550"

            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Sunset Suite"
              desc="Embrace the evening spectacle from your room's panoramic window. Watch as the sun dips below the horizon, creating a breathtaking palette of colors. "
              price="$320"
            />
            <Rooms
              className="pic"
              imageSrc="https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              name="Seaview Sanctuary"
              desc="This spacious sanctuary provides an expansive view of the open sea. Relax in comfort and witness the tranquil waves meet the endless horizon."
              price="$480"
            />
          </div>
        </div>
      </div>
        
      <div className="checkout">
        <button id="checkout">Checkout</button>
      </div>

      <Footer />
    </>
  );
}
