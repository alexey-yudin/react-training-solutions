import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import {BOOKS} from './data';

export class BookList extends Component {
  componentDidMount() {
    document.title = 'Book List';
  }

  render() {
    return (
      <>
        {BOOKS.map(book => {
          return (
            <BookItem
              key={book.id}
              image={book.image}
              title={book.title}
              text={book.description}
            />
          );
        })}
      </>
    );
  }
}
