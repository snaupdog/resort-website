import "../styles/booking.css";
import SolidNavbar from "../components/solid-navbar/solid-navbar.jsx";
import Background from "../components/background/background.jsx";
import Rooms from "../components/rooms/rooms.jsx";

export default function Bookings() {
  return (
    <>
      <SolidNavbar />
      <Background />
      <Rooms imageSrc="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" text="Long Ass Paragraph" />
    </>
  );
}
