import {BASE_URL} from "../../constants/api";

export const FETCH_BOOKS_STARTED = '[Books] FETCH_BOOKS_STARTED';
export const FETCH_BOOKS_SUCCESS = '[Books] FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_ERROR = '[Books] FETCH_BOOKS_ERROR';

export function fetchBooks() {
  return function(dispatch) {
    dispatch(fetchBooksStarted());

    fetch(`${BASE_URL}/books`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(response => response.json())
      .then(books => dispatch(fetchBooksSuccess(books)))
      .catch(error => dispatch(fetchBooksError(error)));
  }
}

export function fetchBooksStarted() {
  return {
    type: FETCH_BOOKS_STARTED
  };
}

export function fetchBooksSuccess(booksList) {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: booksList
  };
}

export function fetchBooksError(error) {
  return {
    type: FETCH_BOOKS_ERROR,
    payload: error
  };
}
