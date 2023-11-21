import React from "react";
import Onview from "../onview/onview.jsx";
import "./omni.css";

function Farmer() {
  return (
    <div className="farmer-container">
      <div className="farmer-white-box">
        <img
          src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJhbGklMjBzcGF8ZW58MHwxfDB8fHww"
          alt="sdfsadf"
        />

        <div className="farmer-text-container">
          <h1> Inspired and guided by our people earth and sky</h1>
          <br />
          <br />
          <br />
          <p>
            We water our ESG initiatives, grow crops on our organic farm, and
            rank as the regional leader in the lowest CO2 emissions per guest
            per night. By nourishing environments for our people between land
            and sky, we honor the generations that came before us and those yet
            to arrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Omni() {
  // <Onview />
  return (
    <div className="omni-container">
      <Farmer />
    </div>
  );
}
