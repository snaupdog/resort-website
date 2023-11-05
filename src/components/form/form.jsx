import React, { Component } from "react";
import "./form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      inquiry: "",
      name: "",
      phoneNumber: "",
      emailAddress: "",
      contactMethod: "Email",
      subscribe: false,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: newValue,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here

    console.log(this.state);

    // Reset form fields if needed
    this.setState({
      subject: "",
      inquiry: "",
      name: "",
      phoneNumber: "",
      emailAddress: "",
      contactMethod: "Email",
      subscribe: false,
    });
  };

  render() {
    return (
      <div className="form-container">
        <h2 className="form-heading1">General Inquiry</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    value={this.state.subject}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    id="inquiry"
                    placeholder="Inquiry"
                    name="inquiry"
                    rows="4"
                    value={this.state.inquiry}
                    onChange={this.handleChange}
                  ></textarea>
                </td>
              </tr>
              <h3>Contact Information</h3>
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
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Email Address"
                    value={this.state.emailAddress}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <h4>How would you prefer us to contact you</h4>
              <tr>
                <td>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={this.state.contactMethod}
                    onChange={this.handleChange}
                  >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td>
                  <label id ="cum" htmlFor="subscribe">
                    I would like to recieve OASIS'S newsletters and promotional
                    information
                  </label>
                </td>
                <td>
                  <div class="cntr">
                    <input
                      type="checkbox"
                      id="cbx"
                      class="hidden-xs-up"
                      name="subscribe"
                      checked={this.state.subscribe}
                      onChange={this.handleChange}
                    />
                    <label for="cbx" class="cbx"></label>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <button type="submit" id='btn'>
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

export default Form;
