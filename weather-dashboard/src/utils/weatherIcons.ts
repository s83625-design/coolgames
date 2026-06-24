export const weatherIcons: { [key: number]: string } = {
  0: '☀️', // Clear sky
  1: '🌤️', // Mainly clear
  2: '⛅', // Partly cloudy
  3: '☁️', // Overcast
  45: '🌫️', // Foggy
  48: '🌫️', // Depositing rime fog
  51: '🌧️', // Drizzle - light
  53: '🌧️', // Drizzle - moderate
  55: '🌧️', // Drizzle - dense
  61: '🌧️', // Rain - slight
  63: '🌧️', // Rain - moderate
  65: '⛈️', // Rain - heavy
  71: '❄️', // Snow - slight
  73: '❄️', // Snow - moderate
  75: '❄️', // Snow - heavy
  77: '❄️', // Snow grains
  80: '🌦️', // Showers - slight
  81: '🌧️', // Showers - moderate
  82: '⛈️', // Showers - violent
  85: '❄️', // Showers - snow slight
  86: '❄️', // Showers - snow heavy
  95: '⛈️', // Thunderstorm - slight
  96: '⛈️', // Thunderstorm - hail
  99: '⛈️', // Thunderstorm - hail heavy
};

export const getWeatherDescription = (code: number): string => {
  const descriptions: { [key: number]: string } = {
    0: 'Clear Sky',
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Depositing Rime Fog',
    51: 'Light Drizzle',
    53: 'Moderate Drizzle',
    55: 'Dense Drizzle',
    61: 'Slight Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    71: 'Slight Snow',
    73: 'Moderate Snow',
    75: 'Heavy Snow',
    77: 'Snow Grains',
    80: 'Slight Showers',
    81: 'Moderate Showers',
    82: 'Violent Showers',
    85: 'Slight Snow Showers',
    86: 'Heavy Snow Showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with Hail',
    99: 'Heavy Thunderstorm with Hail',
  };
  return descriptions[code] || 'Unknown';
};
