import React, { Component } from "react";
import SearchBar from './SearchBar'
import Filters from './Filters/Filters'

class UserInput extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Filters/>
      </div>
    );
  }
}

export default UserInput;