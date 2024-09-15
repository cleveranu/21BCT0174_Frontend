import React from 'react';

const Status = ({ loading, error }) => {
  if (loading) {
    return <div>Searching...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return null;
};

export default Status;
