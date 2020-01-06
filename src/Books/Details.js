import React, { Component } from 'react';
import { render } from '@testing-library/react';

let printAuthor;
const handleClick = () => {
  printAuthor = this.props.authors.map((x, idx) => {
    return <p>{this.props.authors[idx]}</p>;
  });
};

class Details extends Component {
  render() {
    return (
      <div>
        <img alt="book img" src={this.props.img} />
        <h2 onClick={this.handleClick}>{this.props.title} </h2>
        <h3>{this.printAuthor}</h3>
      </div>
    );
  }
}

export default Details;
