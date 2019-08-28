import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import {BOOKS} from './data';
import {ViewTypeButtons} from '../view-type-buttons/view-type-buttons';
import './book-list.css';

export class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewType: 'list'
    };
  }

  componentDidMount() {
    document.title = 'Book List';
  }

  setViewType = viewType => {
    return () => {
      this.setState({viewType});
    };
  };

  render() {
    return (
      <div className={'book-list-container'}>
        <ViewTypeButtons
          viewType={this.state.viewType}
          setViewType={this.setViewType}
        />

        <div className='book-list'>
          {BOOKS.map(book => {
            return (
              <div
                key={book.id}
                className={this.state.viewType === 'list' ? 'list-view' : 'grid-view'}>
                <BookItem
                  image={book.image}
                  title={book.title}
                  text={book.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
