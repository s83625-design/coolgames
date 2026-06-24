import React from 'react';
import { WeatherData } from '../types/weather';
import { weatherIcons, getWeatherDescription } from '../utils/weatherIcons';

interface CurrentWeatherProps {
  weather: WeatherData;
  locationName: string;
  temperatureUnit: 'celsius' | 'fahrenheit';
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  weather,
  locationName,
  temperatureUnit,
}) => {
  const current = weather.current;
  const tempUnit = temperatureUnit === 'celsius' ? '°C' : '°F';
  const speedUnit = temperatureUnit === 'celsius' ? 'km/h' : 'mph';

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-8 text-white shadow-lg">
      <div className="mb-4">
        <h2 className="text-4xl font-bold">{locationName}</h2>
        <p className="text-blue-100">{weather.timezone}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Temperature and Description */}
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">
              {weatherIcons[current.weather_code] || '❓'}
            </div>
            <div className="text-6xl font-bold mb-2">
              {Math.round(current.temperature_2m)}{tempUnit}
            </div>
            <p className="text-2xl text-blue-100">
              {getWeatherDescription(current.weather_code)}
            </p>
            <p className="text-blue-100 mt-2">
              Feels like {Math.round(current.apparent_temperature)}{tempUnit}
            </p>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-blue-100 text-sm">Humidity</p>
            <p className="text-2xl font-bold">{current.relative_humidity_2m}%</p>
          </div>

          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-blue-100 text-sm">Wind Speed</p>
            <p className="text-2xl font-bold">
              {Math.round(current.wind_speed_10m)} {speedUnit}
            </p>
          </div>

          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-blue-100 text-sm">Wind Direction</p>
            <p className="text-2xl font-bold">{current.wind_direction_10m}°</p>
          </div>

          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="text-blue-100 text-sm">Precipitation</p>
            <p className="text-2xl font-bold">{current.precipitation} mm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
