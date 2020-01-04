import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }
  changeSelection = (value) => {
    this.setState({ 
      searchTerm: value });
    }

  render() {
    return (
      <form>
        <input 
        type = 'search' 
        onChange={e => this.changeSelection(e.target.value)}/>
      </form>
    )
  }
}

export default Search;