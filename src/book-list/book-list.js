import React from 'react';
import {Component} from 'react';
import {BookItem} from '../book-item/book-item';
import {ViewTypeButtons} from '../view-type-buttons/view-type-buttons';
import './book-list.css';
import {fetchBooks} from "../store/actions/bookActions";
import {getBooksList, getBooksLoading} from "../store/selectors/bookSelectors";
import {connect} from 'react-redux';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewType: 'list'
    };
  }

  componentDidMount() {
    document.title = 'Book List';

    const isListRoute = this.props.location.pathname === '/rows' || this.props.location.pathname === '/';
    const isGridRoute = this.props.location.pathname === '/grid';

    if (isListRoute) {
      this.setState({viewType: 'list'})
    } else if (isGridRoute) {
      this.setState({viewType: 'grid'});
    }

    this.props.fetchBooks();
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
          {this.props.booksList
            ? this.props.booksList.map(book => {
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
            })
            : null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    booksList: getBooksList(state),
    isLoading: getBooksLoading(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: function () {
      return dispatch(fetchBooks())
    }
  };
}

export const BookListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(BookList);
