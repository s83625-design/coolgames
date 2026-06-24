import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onUseLocation: () => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onUseLocation, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-400 transition-colors"
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
        <button
          type="button"
          onClick={onUseLocation}
          disabled={loading}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-400 transition-colors"
        >
          📍 Location
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
