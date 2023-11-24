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
    // You can define your pricing logic here based on the number of days, adults, and children
    // For simplicity, let's assume a fixed price per night and per person
    const pricePerNight = 250; // Adjust this based on your actual pricing
    const { noofadults, noofdays } = this.state;
    const adultaddon = (parseInt(noofadults) - 1) * 100;
    const childaddon = parseInt(noofadults) * 50;
    const baseprice = pricePerNight * noofdays;
    const totalPrice = baseprice + adultaddon + childaddon;
    return totalPrice;
  };

  render() {
    const totalPrice = this.calculatePrice();
    return (
      <div className="form-container">
        <h2 className="form-heading1">Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <h3>Personal Info</h3>
              <hr />
              <tr>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <select
                    id="chooseRooms"
                    name="chooseRooms"
                    value={this.state.chooseRooms}
                    onChange={this.handleChange}
                  >
                    <option value="Room1">Cove view Retreat</option>
                    <option value="Room2">Sunrise Suite</option>
                    <option value="Room3"> Beachfront Bliss</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="noofrooms">Number of Adults:</label>
                  <input
                    type="number"
                    id="noofadults"
                    name="noofadults"
                    min="1"
                    max="2"
                    value={this.state.noofadults}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="noofrooms">Number of Childeren:</label>
                  <input
                    type="number"
                    id="noofchildren"
                    name="noofchildren"
                    min="1"
                    max="3"
                    value={this.state.noofchildren}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="noofdays">Number of Days:</label>
                  <input
                    type="number"
                    id="noofdays"
                    name="noofdays"
                    min="1"
                    max="10" // Adjust the maximum number of days based on your requirement
                    value={this.state.noofdays}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <p>Total Price: ${totalPrice}</p>
                  <p>
                    {" "}
                    Min Adult : - 2 Min Child :- 3 Extra charge per ADULT :-
                    $100 CHILDREN :-$50{" "}
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="submit" id="btn">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Checkout;
