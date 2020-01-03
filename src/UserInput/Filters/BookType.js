import React, {Component} from 'react';

class BookType extends Component{
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

export default BookType;