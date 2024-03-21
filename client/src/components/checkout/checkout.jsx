import React, { Component } from "react";
import axios from "axios";
import "./checkout.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      chooseRooms: "",
      noofadults: "",
      noofchildren: "",
      noofdays: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3005/Checkoutdata",
        JSON.stringify(this.state),
      );

      console.log("Form Submitted Successfully", response.data);
      alert("Form Submitted Successfully...");
      window.location.reload();
    } catch (error) {
      console.error("Error Submitting Form:", error);
      alert("Form not submitted. Try again");
    }
    this.setState({
      name: "",
      phoneNumber: "",
      chooseRooms: "",
      noofadults: "",
      noofchildren: "",
      noofdays: "",
    });
  };

  calculatePrice = () => {
    const pricePerNight = 250;
    const { noofadults, noofdays, noofchildren } = this.state;
    const adultaddon = (parseInt(noofadults) - 1) * 100;
    const childaddon = parseInt(noofchildren) * 50;
    const baseprice = pricePerNight * noofdays;
    const totalPrice = baseprice + adultaddon + childaddon;
    return totalPrice;
  };

  render() {
    const totalPrice = this.calculatePrice();
    return (
      <div className="checkout-container">
        <h2 className="checkout-heading">Checkout</h2>
        <form onSubmit={this.handleSubmit} className="checkout-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="chooseRooms">Choose Room</label>
            <select
              id="chooseRooms"
              name="chooseRooms"
              value={this.state.chooseRooms}
              onChange={this.handleChange}
            >
              <option value="">Select Room</option>
              <option value="Room1">Cove view Retreat</option>
              <option value="Room2">Sunrise Suite</option>
              <option value="Room3">Beachfront Bliss</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="noofadults">Number of Adults</label>
            <input
              type="number"
              id="noofadults"
              name="noofadults"
              min="1"
              max="2"
              value={this.state.noofadults}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="noofchildren">Number of Children</label>
            <input
              type="number"
              id="noofchildren"
              name="noofchildren"
              min="0"
              max="3"
              value={this.state.noofchildren}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="noofdays">Number of Days</label>
            <input
              type="number"
              id="noofdays"
              name="noofdays"
              min="1"
              max="10"
              value={this.state.noofdays}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <p className="total-price">Total Price: ${totalPrice}</p>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
