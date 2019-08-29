export function getBooksList(state) {
  return state.booksState.booksList;
}

export function getBooksLoading(state) {
  return state.booksState.isLoading;
}

export function getBookDetail(state) {
  return state.booksState.bookDetail;
}
