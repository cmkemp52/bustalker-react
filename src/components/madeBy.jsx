import React, { Component } from "react";

class MadeBy extends Component {
  render() {
    return (
      <nav>
        <ul>
          <h1>Made by:</h1>
          <li class="footer-item">
            <p>
              Christopher Kemp:
              <br />{" "}
              <a href="https://www.linkedin.com/in/cmkemp52/">Linkedin</a>{" "}
              <a href="https://github.com/cmkemp52">Github</a>
            </p>
          </li>
          <li class="footer-item">
            <p>
              Joey Fitzpatrick:
              <br />{" "}
              <a href="https://www.linkedin.com/in/joseph-fitzpatrick-102249177/">
                Linkedin
              </a>{" "}
              <a href="https://github.com/joeyf116">Github</a>
            </p>
          </li>
          <li class="footer-item">
            <p>
              Prescott Sun:
              <br />{" "}
              <a href="https://www.linkedin.com/in/prescott-sun-993612186/">
                Linkedin
              </a>{" "}
              <a href="https://github.com/prescottsun">Github</a>
            </p>
          </li>
        </ul>
      </nav>
    );
  }
}
export default MadeBy;
