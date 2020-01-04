import React, { Component } from "react";
import { render } from "@testing-library/react";

class Details extends Component {
  render() {
    return (
      <div>
        <img alt='book img' src="datafromapi" />
        <h2>{this.props.title} </h2>
      </div>
    );
  }
}
export default Details;