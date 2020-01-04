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
      filterPrint:''
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
    this.setState({ filterPrint: print})
    }
  

  useFilterType = (type) => {console.log(type)}


  render() {
    let filteredBooks = this.state.books;
  if (this.state.filterPrint==='') {
  } else {
 let filteredBooks= this.state.books.filter(el=>el.volumeInfo.printType===this.state.filterPrint);}
    return (
      <main className="App">
        <h1> Google Book Search</h1>
        <Search 
        getBooks= {this.getBooks} 
        
        />
        <Filters useFilterType={this.useFilterType}
        useFilterPrint={this.useFilterPrint} />
        
        <Books books={filteredBooks}/>

      </main>
    );
  }
}
export default App;
