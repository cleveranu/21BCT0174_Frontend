import React from 'react';
import { AiOutlineFilter } from 'react-icons/ai'; // Filter icon
import { FaShareAlt } from 'react-icons/fa'; // Share icon
import { BsCalendar } from 'react-icons/bs'; // Calendar icon for timeline

const SearchSummary = ({ query, resultsCount }) => {
  return (
    <div className="p-4 bg-white border-b border-gray-300 shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <div
          className="text-gray-700"
          style={{
            width: '310px',
            height: '30px',
            fontFamily: 'Gilroy',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '30px',
            textAlign: 'left',
          }}
        >
          About {resultsCount} trademarks found for "{query}"
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Filter Button */}
          <button className="flex items-center p-2 px-4 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 shadow-sm">
            <AiOutlineFilter className="text-gray-600 mr-2" />
            <span className="text-gray-600">Filter</span>
          </button>
          
          {/* Share Button */}
          <button className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-sm">
            <FaShareAlt className="text-gray-600" />
          </button>
          
          {/* Timeline Button */}
          <button className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-sm">
            <BsCalendar className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Separator Line */}
      <hr className="my-4 border-gray-30" />

  {/* Suggested Searches */}
<div className="bg-white p-4 mt-4 w-full max-w-md">
  <div className="flex items-center space-x-4 text-gray-700 mb-2">
    <span>Also try searching for:</span>
    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600">
      Nike
    </button>
    <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400">
      Ike
    </button>
  </div>
</div>
</div>
  
  );
};

export default SearchSummary;
