import React, { Component } from "react";
import Details from './Details'

class Books extends Component {
  render() {
    // psuedocode- map over data passed down, with index, dont forget key, pass into Details
    return (
      <div>
        <Details />
      </div>
    );
  }
}

export default Books;
