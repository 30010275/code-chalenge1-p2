import React from 'react';

function BookItem({ book }) {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.genre}</p>
    </div>
  );
}

export default BookItem;
