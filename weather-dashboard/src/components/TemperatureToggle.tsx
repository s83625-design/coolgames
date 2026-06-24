import React from 'react';

interface TemperatureToggleProps {
  temperatureUnit: 'celsius' | 'fahrenheit';
  onToggle: (unit: 'celsius' | 'fahrenheit') => void;
}

const TemperatureToggle: React.FC<TemperatureToggleProps> = ({
  temperatureUnit,
  onToggle,
}) => {
  return (
    <div className="flex gap-2 mb-6">
      <button
        onClick={() => onToggle('celsius')}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          temperatureUnit === 'celsius'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        °C Celsius
      </button>
      <button
        onClick={() => onToggle('fahrenheit')}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          temperatureUnit === 'fahrenheit'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        °F Fahrenheit
      </button>
    </div>
  );
};

export default TemperatureToggle;
