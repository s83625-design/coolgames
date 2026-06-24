import React, { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import ForecastCard from './components/ForecastCard';
import HourlyForecast from './components/HourlyForecast';
import FavoritesList from './components/FavoritesList';
import TemperatureToggle from './components/TemperatureToggle';
import { storageService } from './services/storage';
import { FavoriteLocation } from './types/weather';
import './App.css';

function App() {
  const {
    weather,
    location,
    loading,
    error,
    temperatureUnit,
    setTemperatureUnit,
    searchLocation,
    getCurrentLocation,
    fetchWeather,
  } = useWeather();

  const [favorites, setFavorites] = useState<FavoriteLocation[]>(() =>
    storageService.getFavorites()
  );
  const [selectedForecastIndex, setSelectedForecastIndex] = useState<number | null>(null);

  const handleToggleUnit = (unit: 'celsius' | 'fahrenheit') => {
    setTemperatureUnit(unit);
  };

  const handleAddFavorite = () => {
    if (location && weather) {
      const isFav = storageService.isFavorite(
        weather.latitude,
        weather.longitude
      );
      if (!isFav) {
        const newFav = storageService.addFavorite({
          name: location.name,
          latitude: weather.latitude,
          longitude: weather.longitude,
        });
        setFavorites([...favorites, newFav]);
      }
    }
  };

  const handleRemoveFavorite = (id: string) => {
    storageService.removeFavorite(id);
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const handleSelectFavorite = async (fav: FavoriteLocation) => {
    setSelectedForecastIndex(null);
    await fetchWeather(fav.latitude, fav.longitude);
  };

  const tempUnit = temperatureUnit === 'celsius' ? '°C' : '°F';

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 to-blue-400 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">🌤️ Weather Dashboard</h1>
          <p className="text-blue-100">Real-time weather data powered by Open-Meteo API</p>
        </header>

        {/* Search and Controls */}
        <SearchBar
          onSearch={searchLocation}
          onUseLocation={getCurrentLocation}
          loading={loading}
        />

        {/* Temperature Toggle */}
        <TemperatureToggle
          temperatureUnit={temperatureUnit}
          onToggle={handleToggleUnit}
        />

        {/* Favorites */}
        <FavoritesList
          favorites={favorites}
          onSelectFavorite={handleSelectFavorite}
          onRemoveFavorite={handleRemoveFavorite}
        />

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
            <p className="font-semibold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="text-center text-white">
              <div className="animate-spin text-6xl mb-4">🌀</div>
              <p className="text-2xl">Loading weather data...</p>
            </div>
          </div>
        )}

        {/* Weather Display */}
        {weather && location && !loading && (
          <>
            {/* Current Weather */}
            <CurrentWeather
              weather={weather}
              locationName={location.name}
              temperatureUnit={temperatureUnit}
            />

            {/* Add to Favorites Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleAddFavorite}
                className="px-6 py-3 bg-yellow-400 text-gray-800 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                ⭐ Add to Favorites
              </button>
            </div>

            {/* 7-Day Forecast */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold text-white mb-4">7-Day Forecast</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {weather.daily.time.slice(0, 7).map((date, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedForecastIndex(index)}
                  >
                    <ForecastCard
                      date={date}
                      weatherCode={weather.daily.weather_code[index]}
                      maxTemp={weather.daily.temperature_2m_max[index]}
                      minTemp={weather.daily.temperature_2m_min[index]}
                      precipitation={weather.daily.precipitation_sum[index]}
                      windSpeed={weather.daily.wind_speed_10m_max[index]}
                      tempUnit={tempUnit}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hourly Forecast */}
            <div className="mt-8">
              <HourlyForecast
                time={weather.hourly.time}
                temperature={weather.hourly.temperature_2m}
                humidity={weather.hourly.relative_humidity_2m}
                precipitation={weather.hourly.precipitation}
                weatherCode={weather.hourly.weather_code}
                windSpeed={weather.hourly.wind_speed_10m}
                tempUnit={tempUnit}
              />
            </div>
          </>
        )}

        {/* Initial State */}
        {!weather && !loading && (
          <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-12 text-center text-white">
            <p className="text-2xl font-semibold mb-4">👋 Welcome to Weather Dashboard</p>
            <p className="mb-6">Search for a city or use your current location to get started</p>
            <button
              onClick={getCurrentLocation}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              🌍 Get Current Location
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
