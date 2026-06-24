import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatTime } from '../utils/dateFormatter';
import { weatherIcons } from '../utils/weatherIcons';

interface HourlyForecastProps {
  time: string[];
  temperature: number[];
  humidity: number[];
  precipitation: number[];
  weatherCode: number[];
  windSpeed: number[];
  tempUnit: string;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({
  time,
  temperature,
  humidity,
  precipitation,
  weatherCode,
  windSpeed,
  tempUnit,
}) => {
  const data = time.slice(0, 24).map((t, i) => ({
    time: formatTime(t),
    temperature: temperature[i],
    humidity: humidity[i],
    precipitation: precipitation[i],
    windSpeed: windSpeed[i],
    icon: weatherIcons[weatherCode[i]] || '❓',
  }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold text-gray-800 mb-6">24-Hour Forecast</h3>

      {/* Hourly Items */}
      <div className="overflow-x-auto mb-8">
        <div className="flex gap-2 min-w-max">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
              <p className="text-xs font-semibold text-gray-600">{item.time}</p>
              <p className="text-2xl my-1">{item.icon}</p>
              <p className="text-sm font-bold text-gray-800">
                {Math.round(item.temperature)}{tempUnit}
              </p>
              <p className="text-xs text-gray-500">💧 {item.humidity}%</p>
            </div>
          ))}
        </div>
      </div>

      {/* Temperature Chart */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Temperature Trend</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#3b82f6"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Humidity Chart */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Humidity Trend</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="humidity" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HourlyForecast;
