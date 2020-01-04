import React, { Component } from "react";
import Details from './Details'

class Books extends Component {
  render() {
    console.log('Books console log',this.props.books)
    // psuedocode- map this
    return (
      <div>
        <h2> Book information goes here</h2>
      </div>
    );
  }
}

export default Books;
