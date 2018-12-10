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
  render() {
    // this is JavaScript
    // const s = 'Hello...'


    // below this line, within the return is JSX
    return (
      <div className="App">
      <h2>{this.props.name}</h2>
        {/* This is JSX inside the of the return paranthesis with its comment syntax */}
        {books.map(book =>
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
