import React, {Component} from 'react';
import BookStatus from './BookStatus';
import BookType from './BookType';

class Filters extends Component{
  render() {
    return (
      <div>
        <BookStatus />
        <BookType />
      </div>
    )
  }
}

export default Filters;