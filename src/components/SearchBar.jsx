import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    debounceSearch(value);
  };

  const debounceSearch = debounce((value) => {
    onSearch(value);
  }, 500);

  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  return (
    <input
      type="text"
      placeholder="Search trademarks..."
      value={input}
      onChange={handleInput}
      className="w-full border p-2 rounded"
    />
  );
};

export default SearchBar;
