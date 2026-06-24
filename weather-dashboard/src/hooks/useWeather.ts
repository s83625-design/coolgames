import { useState, useEffect } from 'react';
import { WeatherData, LocationData } from '../types/weather';
import { weatherService } from '../services/weatherApi';
import { geolocationService } from '../services/geolocation';

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [temperatureUnit, setTemperatureUnit] = useState<'celsius' | 'fahrenheit'>('celsius');

  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      setError(null);
      const data = await weatherService.getWeatherByCoordinates(
        latitude,
        longitude,
        temperatureUnit
      );
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather');
    } finally {
      setLoading(false);
    }
  };

  const searchLocation = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const locations = await weatherService.searchLocations(query);
      if (locations.length > 0) {
        const loc = locations[0];
        setLocation({
          name: loc.name,
          latitude: loc.latitude,
          longitude: loc.longitude,
          country: loc.country,
        });
        await fetchWeather(loc.latitude, loc.longitude);
      } else {
        setError('Location not found');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search location');
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = async () => {
    try {
      setLoading(true);
      setError(null);
      const coords = await geolocationService.getCurrentLocation();
      await fetchWeather(coords.latitude, coords.longitude);
      // Optionally, get location name via reverse geocoding
      setLocation({
        name: 'Current Location',
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get current location');
    } finally {
      setLoading(false);
    }
  };

  return {
    weather,
    location,
    loading,
    error,
    temperatureUnit,
    setTemperatureUnit,
    fetchWeather,
    searchLocation,
    getCurrentLocation,
  };
};
