import React, {Component} from 'react';

class BookStatus extends Component{
  render() {
    return (
      <form>
        <select>
          <option value='free'>Free</option>
          <option value='paid'>Paid</option>
        </select>
      </form>
    )
  }
}

export default BookStatus;