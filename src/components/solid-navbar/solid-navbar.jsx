import "./solid-navbar.css";
import { Outlet, Link } from "react-router-dom";

export default function SolidNavbar() {
  return (
    <>
      <div className="solidnavbar-header">
        <ul>
          <li>
            <Link to={`/contacts`}>Support</Link>
          </li>
          <li>
            <Link to={`/bookings`}>Bookings</Link>
          </li>
          <li>
            <Link to={`/facilities`}>Facilities</Link>
          </li>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
