import "./navbar.css";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to={`contacts/1`}>Support</Link>
        </li>
        <li>
          <Link to={`contacts/1`}>Bookings</Link>
        </li>
        <li>
          <Link to={`facilities/1`}>Facilities</Link>
        </li>
        <li>
          <Link to={`contacts/1`}>Home</Link>
        </li>
      </ul>
    </div>
  );
}
