import React from 'react';
import {Component} from 'react';
import {BASE_URL} from '../constants/api';
import {BookItem} from '../book-item/book-item';
import './book-detail.css';

export class BookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`${BASE_URL}/book/${id}`)
      .then(response => {
        return response.json();
      })
      .then(book => {
        return this.setState({book: book});
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className='book-detail'>
        {
          this.state.book
            ? <BookItem
                title={this.state.book.title}
                text={this.state.book.description}
                image={this.state.book.image}
              />
            : null
        }
      </div>
    );
  }
}
