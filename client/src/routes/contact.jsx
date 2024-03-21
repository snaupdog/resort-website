import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";
import Form from "../components/form/form.jsx";
import React from "react";
import "../styles/contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const contactData = [
  {
    name: "YANA VILLAS BALI",
    phone: "(+62) 361 702222",
    email: "reservation.bali@ayana.com",
  },
  {
    name: "AYANA SEGARA BALI",
    phone: "(+62) 361 702222",
    email: "reservation.bali@ayana.com",
  },
  {
    name: "AYANA RESORT BALI",
    phone: "(+62) 361 702222",
    email: "reservation.bali@ayana.com",
  },
  {
    name: "RIMBA BY AYANA BALI",
    phone: "(+62) 361 8468468",
    email: "reservation.bali@ayana.com",
  },
  {
    name: "JAKARTA SALES OFFICE",
    phone: "(+62) 21 5708787",
    email: "jso@ayanaresort.com",
  },
  {
    name: "TOKYO SALES OFFICE",
    phone: "(+81) 3 6459 3670",
    email: "tso@ayanaresort.com",
  },
];

function ContactBox({ name, phone, email }) {
  return (
    <div className="contact-box">
      <h3 className="h3-cbox">{name}</h3>
      <h6 className="h6-cbox">
        <FontAwesomeIcon icon={faPhone} /> {phone}
      </h6>

      <h6 className="h6-cbox">
        <FontAwesomeIcon icon={faEnvelope} /> {email}
      </h6>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="header-contact">Contact us pls</div>

      <div className="formm-box-container">
        <div className="papa-container">
          {contactData.map((contact, index) => (
            <ContactBox key={index} {...contact} />
          ))}
        </div>

        <Form />
      </div>

      <Footer />
    </>
  );
}
