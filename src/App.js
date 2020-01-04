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
      filteredBooks:[]
    };
  }

  getBooks = (searchTerm) => {
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
  }
  useFilterPrint = (print) => { 
    //filter the books array by printType
    let books= this.state.books;
    books= books.filter(el=>el.volumeInfo.title==="The Way of Kings");
    this.setState({
      filteredBooks: this.books,
    })
    console.log(this.state.filteredBooks);
    }
  

  useFilterType = (type) => {console.log(type)}

  render() {
    return (
      <main className="App">
        <h1> Google Book Search</h1>
        <Search 
        getBooks= {this.getBooks} 
        
        />
        <Filters useFilterType={this.useFilterType}
        useFilterPrint={this.useFilterPrint} />
        
        <Books books={this.state.filteredBooks}/>

      </main>
    );
  }
}
export default App;
