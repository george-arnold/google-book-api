import React, {Component} from 'react';
import BookStatus from './BookStatus';
import BookType from './BookType';

class Filters extends Component{
  render() {
    return (
      <form>
        <select>
          <option value='horror'>Horror</option>
          <option value='action'>Action</option>
        </select>
      </form>
    )
  }
}

export default Filters;