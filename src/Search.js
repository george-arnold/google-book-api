import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }
  changeSelection (e){
    e.preventDefaut();
    this.setState({ 
      searchTerm: this.target.value });
    }

  render() {
    return (
      <form onSubmit = {e => this.changeSelection}>
          <input type="text" />

        <input type="submit" value="Submit" />
      </form>

    )
  }
}

export default Search;