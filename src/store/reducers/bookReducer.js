import {
  FETCH_BOOK_DETAIL_ERROR,
  FETCH_BOOK_DETAIL_STARTED, FETCH_BOOK_DETAIL_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_SUCCESS
} from "../actions/bookActions";

export const booksInitialState = {
  booksList: [],
  bookDetail: null,
  isLoading: false,
  error: null
};

export function bookReducer(state = booksInitialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_STARTED:
      return {...state, isLoading: true, error: null};
    case FETCH_BOOKS_SUCCESS:
      return {...state, isLoading: false, booksList: action.payload};
    case FETCH_BOOKS_ERROR:
      return {...state, isLoading: false, error: action.payload};

    case FETCH_BOOK_DETAIL_STARTED:
      return {...state, isLoading: true, error: null};
    case FETCH_BOOK_DETAIL_SUCCESS:
      return {...state, isLoading: false, bookDetail: action.payload};
    case FETCH_BOOK_DETAIL_ERROR:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
}
