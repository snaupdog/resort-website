import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      inquiry: '',
      contactMethod: 'Email',
      subscribe: false,
      phoneNumber: '',
      emailAddress: '',
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: newValue,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(this.state);
    // Reset form fields if needed
    this.setState({
      subject: '',
      inquiry: '',
      contactMethod: 'Email',
      subscribe: false,
      phoneNumber: '',
      emailAddress: '',
    });
  }

  render() {
    return (
      <div className="main-container">
        <h2>General Inquiry</h2>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><input type="text" placeholder='Subject' id="subject" name="subject" value={this.state.subject} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td><textarea id="inquiry" placeholder='Inquiry' name="inquiry" rows="4" value={this.state.inquiry} onChange={this.handleChange}></textarea></td>
              </tr>
        <h3>Contact Information</h3>
              <tr>
                <td><input type="text" id="name" name="name" placeholder='Full Name' value={this.state.phoneNumber} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td><input type="tel" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' value={this.state.phoneNumber} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td><input type="email" id="emailAddress" name="emailAddress" placeholder="Email Address" value={this.state.emailAddress} onChange={this.handleChange} /></td>
              </tr>
        <h4>How would you prefer us to contact you</h4>
              <tr>
                <td>
                  <select id="contactMethod" name="contactMethod" value={this.state.contactMethod} onChange={this.handleChange}>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="subscribe">I would like to recieve OASIS'S newsletters and promotional information</label></td>
                <td><input type="checkbox" id="subscribe" name="subscribe" checked={this.state.subscribe} onChange={this.handleChange} /></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button type="submit">Submit</button>
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
