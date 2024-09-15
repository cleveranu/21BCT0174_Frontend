import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';

import Results from './components/Results';
import Status from './components/Status';
import SearchSummary from './components/SubHeader'; // Import the new component

const App = () => {
  const [query, setQuery] = useState('');
const [filters, setFilters] = useState({ owner: '', firm: '', attorney: '', status: '' });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get('https://vit-tm-task.api.trademarkia.app/api/v3/us', {
          params: {
            query,
            owner: filters.owner,
            firm: filters.firm,
            attorney: filters.attorney,
            status: filters.status,
          },
        });
        setResults(response.data);
      } catch (err) {
        setError('An error occurred during the search.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, filters]);

  return (
    <div>
      <Header onSearch={handleSearch} />

      <SearchSummary query={query} resultsCount={results.length} />

      <div className="container mx-auto p-4">
       
        <Status loading={loading} error={error} />
        <Results results={results} />
      </div>
    </div>
  );
};

export default App;
