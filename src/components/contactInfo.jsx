import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <nav>
        <ul>
          <h1>Marta Contact:</h1>
          <li class="footer-item">
            <p>
              Schedule Info:
              <br /> 404-848-5000
            </p>
          </li>
          <li class="footer-item">
            <p>
              Customer Service:
              <br /> 404-848-5000
            </p>
          </li>
          <li class="footer-item">
            <p>
              MARTA Police:
              <br /> 404-848-4900
            </p>
          </li>
          <li class="footer-item">
            <p>
              MARTA Mobility:
              <br /> 404-848-582
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ContactInfo;
