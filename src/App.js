import React, { Component } from 'react';
import Books from './Books/Books';
import Search from './Search';
import Filters from './Filters';
//create state
//call API to update state of which books are selected

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      categories: [],
      filterPrint: '',
      filterType: ''
    };
  }

  getBooks = searchTerm => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyB9N3gY_0s9sVNzP-6g8DX_2LGd3pGSuaA`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var mySet = new Set();
        data.items.forEach(book => {
          // for each book add the categories
          book.volumeInfo.categories.forEach(category => mySet.add(category));
        });
        const categories = Array.from(mySet);
        
        this.setState({
          books: data.items,
          categories,
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
    const { books, filterPrint, filterType, categories } = this.state;

    let filteredBooks = books;
    if (filterPrint !== '') {
      filteredBooks = books.filter(el => el.volumeInfo.printType === filterPrint);
    }
    
    if (filterType !== '') {
      filteredBooks = books.filter(el => el.volumeInfo.categories.includes(filterType));
    }

    return (
      <main className="App">
        <h1> Google Book Search</h1>
        <Search getBooks={this.getBooks} />
        <Filters useFilterType={this.useFilterType} useFilterPrint={this.useFilterPrint} categories={categories}/>

        <Books books={filteredBooks} />
      </main>
    );
  }
}
export default App;
