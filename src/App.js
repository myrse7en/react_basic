import React, { Component } from 'react';
import './App.css';

let books = [
  {
    'title': 'The Grinch',
    'id': 101,
    'author': 'Dr. Seuss',
    'url': 'https://www.imdb.com/title/tt0170016/'
  },
  {
    'title': 'Red Fish Blue Fish',
    'id': 102,
    'author': 'Dr. Seuss',
    'url': 'https://www.amazon.com/Fish-Blue-Myself-Beginner-Books/dp/0756921333'
  }
];

class App extends Component {
  // first lifecycle method - constructor
  //only runs when component gets instantiated
  constructor() {
    // gives us ability from the Component class to use state
    super();

    // use state to hold variables attached to indstances of component
    this.state = {
      books: [],
      name: 'Mayur Bhatia'
    }
  }

  // second lifecycle method - componentWillMount()
  //generally good for intializing variables or the state
  // gets hit before each rendered
  componentWillMount() {
    // use set state method to alter books variables
    this.setState({
      books: books
    });
  }

  // third lifecycle method -
  // decedies what gets returned and rendered on the browser
  // gets hit every render
  render() {
    // this is JavaScript
    // const s = 'Hello...'


    // below this line, within the return is JSX
    return (
      <div className="App">
      <h2>{this.state.name}</h2>
        {/* This is JSX inside the of the return paranthesis with its comment syntax */}
        {this.state.books.map(book =>
          <div key={book.id}>
            <span>
            <a href={book.url} target="_blank">{book.title}</a>
            </span>
            <span>{book.author}</span>
          </div>
        )}
      </div>
    ); // JSX ends with return, JavaScript below
  }
}

export default App;
