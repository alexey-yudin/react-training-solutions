import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import './book-detail.css';
import {connect} from "react-redux";
import {getBookDetail} from "../store/selectors/bookSelectors";
import {fetchBookDetail} from "../store/actions/bookActions";

class BookDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.fetchBookDetail(id);
  }

  render() {
    const {bookDetail} = this.props;
    return (
      <div className='book-detail'>
        {
          bookDetail
            ? <BookItem
                title={bookDetail.title}
                text={bookDetail.description}
                image={bookDetail.image}
              />
            : null
        }
      </div>
    );
  }
}

export const BookDetailContainer = connect(
  state => ({
    bookDetail: getBookDetail(state)
  }), {fetchBookDetail}
)(BookDetail);
