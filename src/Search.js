import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: {
        value: ''
      }
    };
  }

  handleChange(e) {
    this.setState({
      searchTerm: { value: e }
    });
  }

  // this needs to reset the form
  // move it to App, pass
  handleSubmit(e) {
    e.preventDefault();
    const {searchTerm} = this.state;

    this.props.getBooks(searchTerm.value);
    
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor= "search">
          Name:
          </label>
          <input type="text" name = "search" id= "search" placeholder="King Henry" onChange={e=>this.handleChange(e.target.value)} />
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
