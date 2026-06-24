import React from 'react';
import { formatDate } from '../utils/dateFormatter';
import { weatherIcons, getWeatherDescription } from '../utils/weatherIcons';

interface ForecastCardProps {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
  precipitation: number;
  windSpeed: number;
  tempUnit: string;
  onClick?: () => void;
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  date,
  weatherCode,
  maxTemp,
  minTemp,
  precipitation,
  windSpeed,
  tempUnit,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <p className="text-sm font-semibold text-gray-600 mb-2">{formatDate(date)}</p>

      <div className="text-4xl text-center mb-2">
        {weatherIcons[weatherCode] || '❓'}
      </div>

      <p className="text-xs text-gray-500 text-center mb-2">
        {getWeatherDescription(weatherCode)}
      </p>

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Max:</span>
          <span className="font-semibold">
            {Math.round(maxTemp)}{tempUnit}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Min:</span>
          <span className="font-semibold">
            {Math.round(minTemp)}{tempUnit}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Rain:</span>
          <span className="font-semibold">{precipitation} mm</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Wind:</span>
          <span className="font-semibold">{Math.round(windSpeed)} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
