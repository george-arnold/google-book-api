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
      searchTerm: e.target.value });
    }
    
  render() {
    return (
      <form onSubmit = {e => this.changeSelection(e)}>
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