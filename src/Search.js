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
    }

  render() {
    return (
      <form>
        <input 
        type = 'search' 
        onSubmit = {e => this.changeSelection(e.target.value)
        .then(this.props.getBooks(this.state.searchTerm))}
         />

        <input 
        type = 'submit'

        />
      </form>
    )
  }
}

export default Search;