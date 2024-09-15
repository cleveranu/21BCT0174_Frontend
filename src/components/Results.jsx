import React from 'react';
import { MdDescription } from 'react-icons/md'; // Description icon
import { FaVectorSquare } from 'react-icons/fa'; // Vector icon (replace with appropriate icon if needed)
import image from '../pictures/Image.png'; // Import your image


const results = [
  {
    mark: '/path-to-image/nike1.png',
    details: {
      brand: 'NIKE',
      company: 'NIKE, INC.',
      number: '1234567890',
      date: '01/01/2022',
    },
    status: 'Live',
    description: 'A popular sportswear brand.',
    classes: [8, 45, 45], // Example classes
  },
  {
    mark: '/path-to-image/nike2.png', // Replace with actual image paths
    details: {
      brand: 'NIKE',
      company: 'Nike, Inc.',
      number: '2345678901',
      date: '02/02/2023',
    },
    status: 'Registered',
    description: 'Known for innovative sports products.',
    classes: [25],
  },
  {
    mark: '/path-to-image/nike3.png', // Replace with actual image paths
    details: {
      brand: 'NIKE',
      company: 'Nike, Inc.',
      number: '3456789012',
      date: '03/03/2024',
    },
    status: 'Live',
    description: 'Famous for high-performance gear.',
    classes: [3, 18],
  },
  {
    mark: '/path-to-image/nike4.png', // Replace with actual image paths
    details: {
      brand: 'NIKE',
      company: 'Nike, Inc.',
      number: '4567890123',
      date: '04/04/2025',
    },
    status: 'Live',
    description: 'Leading brand in athletic footwear.',
    classes: [9, 20],
  },
];

const Results = () => {
  return (
    <div className="p-4">
     

      {/* Results Table */}
      <div className="relative">
        <div className="absolute left-0 top-0 w-4/5 bg-white">
          {/* Column Headers */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 font-bold text-gray-700 mb-2 text-center ">
            <div className="p-2 border-b border-gray-300 text-center">Mark</div>
            <div className="p-2 border-b border-gray-300 align center">Details</div>
            <div className="p-2 border-b border-gray-300">Status</div>
            <div className="p-2 border-b border-gray-300">Class/Description</div>
          </div>
          
          {/* Rows */}
          <div className="space-y-4">
            {results.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-4 gap-4 border-b border-gray-300 py-2">
                {/* Mark Column */}
                <div className="p-2 flex items-center justify-center bg-gray-100"> {/* Added a dark background to test visibility */}
  <img 
    src={image} 
    alt="Mark" 
    className="w-12 h-12 object-cover rounded-lg"
    style={{ boxShadow: '0 4px 8px rgb(255, 255, 255, 0.7)' }}  // Increased shadow spread and opacity
  />
</div>


                {/* Details Column */}
                <div className="p-2 text-center">
  <div className="text-gray-800">
    <div className="font-bold">{item.details.brand}</div>
    <div>{item.details.company}</div>
    <div className="mt-2 font-bold">{item.details.number}</div>
    <div>{item.details.date}</div>
  </div></div>
  <div className="flex flex-col space-y-2 text-center">
  {/* Status Circle and Status Text on the same line */}
  <div className="flex items-center space-x-2">
    <div
      className={`w-3 h-3 rounded-full ${item.status === 'live' ? 'bg-green-500' : 'bg-gray-500'}`}
      title={item.status}
    />
    <span className="text-sm text-gray-600">{item.status}</span>
  </div>

  {/* Dates on separate lines */}
  <div className="text-sm text-gray-600">
    On 26 Jun 2020
  </div>
  <div className="text-sm text-gray-600">
    <span className="mr-1">🔄</span> 26/10/2020
  </div>
</div>

  



                {/* Class/Description Column */}
                <div className="p-2">
                  <div className="mb-2">
                    <div className="text-gray-800 mb-1">
                      {item.description}
                    </div>
                    <div className="flex items-center space-x-1">
                      {item.classes.slice(0, 3).map((cls, idx) => (
                        <div key={idx} className="flex items-center space-x-1">
                          <FaVectorSquare className="text-gray-600 text-sm" />
                          <span className="text-gray-600 text-sm">Class {cls}</span>
                        </div>
                      ))}
                      {item.classes.length > 3 && (
                        <span className="text-gray-600 text-sm">...</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5 h-full bg-transparent" /> {/* Transparent div to fill 40% space on the right */}
      </div>
    </div>
  );
};

export default Results;
