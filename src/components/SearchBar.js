import React from 'react';

function SearchBar({ searchTerm, handleSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by title or genre"
      />
    </div>
  );
}

export default SearchBar;
