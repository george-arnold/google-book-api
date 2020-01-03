import React, { Component } from "react";
import { render } from "@testing-library/react";

class Details extends Component {
  render() {
    return (
      <div>
        <img alt='book img' src="datafromapi" />
        <h2>Title Henry I</h2>
        <h3>Author: Warren Hollister</h3>
        <h3>Price: $50.00</h3>
        <p></p>
      </div>
    );
  }
}
export default Details;