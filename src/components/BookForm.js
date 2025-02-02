import React, { useState } from 'react';

function BookForm({ addBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...formData, id: Date.now() };
    addBook(newBook);
    setFormData({ title: '', author: '', genre: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Book Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
