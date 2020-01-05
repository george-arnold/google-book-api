import React, { Component } from "react";
import Books from "./Books/Books";
import Search from "./Search";
import Filters from "./Filters";
//create state
//call API to update state of which books are selected

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      filterPrint: "",
      filterType: ""
    };
  }

  getBooks = searchTerm => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyB9N3gY_0s9sVNzP-6g8DX_2LGd3pGSuaA`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };
  useFilterPrint = print => {
    this.setState({ filterPrint: print });
  };

  useFilterType = type => {
    this.setState({ filterType: type });
  };

  render() {
    
    const { books, filterPrint, filterType } = this.state;
  
    let filteredBooks = books;
    if (filterPrint !== "") {
      filteredBooks = books.filter(
        el => el.volumeInfo.printType === filterPrint
      );
    } 
    console.log('print filter',filteredBooks);
    //something isn't working  below here
    if (filterType !== "") {
      filteredBooks = books.filter(
        el => el.volumeInfo.categories.includes(filterType)
      );
    }console.log('type filter',filteredBooks);


    return (
      <main className="App">
        <h1> Google Book Search</h1>
        <Search getBooks={this.getBooks} />
        <Filters
          useFilterType={this.useFilterType}
          useFilterPrint={this.useFilterPrint}
        />

        <Books books={filteredBooks} />
      </main>
    );
  }
}
export default App;
