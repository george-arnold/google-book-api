import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  changeSelection = (value) => {
    this.setState({ 
      searchTerm: value });
      this.props.getBooks(this.state.searchTerm)}
    };

  render() {
    return (
      <form onSubmit = {e => this.changeSelection(e.target.value)} >
        <input 
        type = 'search' 
                 />

        <input 
        type = 'submit'

        />
      </form>
    )
  }
}

export default Search;