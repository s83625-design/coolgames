import React from 'react';
import { FilterType } from '../types';

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onClearCompleted: () => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  activeFilter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  onClearCompleted,
}) => {
  return (
    <div className="mb-6 space-y-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search tasks..."
        className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeFilter === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          All
        </button>
        
        <button
          onClick={() => onFilterChange('active')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeFilter === 'active'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Active
        </button>
        
        <button
          onClick={() => onFilterChange('completed')}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeFilter === 'completed'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Completed
        </button>

        <button
          onClick={onClearCompleted}
          className="ml-auto px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default FilterTabs;
