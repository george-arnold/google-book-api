import React, { Component } from "react";
import Details from "./Details";

class Books extends Component {
  render() {
    return (
      <div>
        {this.props.books.map((x,idx) => {
          return (
            <Details
            key={idx} 
            title={this.props.books[idx].volumeInfo.title} />
          );
        })}
      </div>
    );
  }
}

export default Books;
