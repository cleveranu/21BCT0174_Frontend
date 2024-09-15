import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../pictures/Logo.png';

const Header = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <header className="p-4 bg-background shadow-xl mt-2  boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)">
      <div className="flex justify-center items-center space-x-2 boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)">
        
        {/* Logo Section */}
        <img
          src={logo}
          alt="Trademarkia Logo"
          style={{ width: '155.37px', height: '21.93px', opacity: '1' }}
        />

        {/* Search Bar */}
        <div
          className="inline-flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden"
          style={{
            width: '390px', // Adjusted width for the search bar
            height: '40px', // Adjusted height for the search bar
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)', // Blueish shadow effect
          }}
        >
          <span className="p-2">
            <AiOutlineSearch className="text-gray-500" />
          </span>
          <input
            type="text"
            className="flex-1 p-2 outline-none"
            placeholder="Search for trademark here eg: Mickey Mouse"
            value={input}
            onChange={handleInputChange}
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white p-2 px-4 rounded-lg hover:bg-blue-700"
          style={{
            width: '79px',
            height: '41px',
            boxShadow: '0 4px 8px rgba(59, 130, 246, 0.3)', // Blueish shadow effect
          }}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
