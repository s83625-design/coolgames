import axios from 'axios';
import { WeatherData, LocationData } from '../types/weather';

const OPEN_METEO_BASE = 'https://api.open-meteo.com/v1';
const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1';

export const weatherService = {
  // Get weather data for coordinates
  getWeatherByCoordinates: async (
    latitude: number,
    longitude: number,
    temperatureUnit: 'celsius' | 'fahrenheit' = 'celsius'
  ): Promise<WeatherData> => {
    try {
      const response = await axios.get(`${OPEN_METEO_BASE}/forecast`, {
        params: {
          latitude,
          longitude,
          current: 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m',
          hourly: 'temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,wind_speed_10m',
          daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max',
          temperature_unit: temperatureUnit === 'fahrenheit' ? 'fahrenheit' : 'celsius',
          timezone: 'auto',
          forecast_days: 16,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw new Error('Failed to fetch weather data');
    }
  },

  // Search for locations by name
  searchLocations: async (query: string): Promise<LocationData[]> => {
    try {
      const response = await axios.get(`${GEOCODING_API}/search`, {
        params: {
          name: query,
          count: 10,
          language: 'en',
          format: 'json',
        },
      });
      return response.data.results || [];
    } catch (error) {
      console.error('Error searching locations:', error);
      throw new Error('Failed to search locations');
    }
  },

  // Get location by coordinates (reverse geocoding)
  getLocationByCoordinates: async (
    latitude: number,
    longitude: number
  ): Promise<LocationData> => {
    try {
      const response = await axios.get(`${GEOCODING_API}/reverse`, {
        params: {
          latitude,
          longitude,
          format: 'json',
        },
      });
      const result = response.data.results?.[0];
      if (!result) throw new Error('Location not found');
      return {
        name: result.name,
        latitude: result.latitude,
        longitude: result.longitude,
        country: result.country,
        admin1: result.admin1,
      };
    } catch (error) {
      console.error('Error getting location:', error);
      throw new Error('Failed to get location');
    }
  },
};
