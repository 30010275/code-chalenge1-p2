import React, { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import SearchBar from './components/SearchBar';
import './styles.css';

function App() {
  const initialBooks = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" }
  ];

  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    
    <div className="app">
      <h1>Digital Library</h1>
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <BookForm addBook={addBook} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
