# Weather Dashboard

A modern, responsive weather dashboard built with React, TypeScript, and Tailwind CSS. Fetches real-time weather data from the free Open-Meteo API with no authentication required.

## Features

🌍 **Location Search**
- Search weather by city name
- Auto-detect current location via geolocation
- Save favorite locations
- Switch between saved locations instantly

📊 **Weather Data**
- Current weather conditions (temperature, humidity, wind speed, etc.)
- 7-day forecast
- Hourly weather data
- Weather alerts and warnings
- UV index information

📈 **Data Visualization**
- Interactive temperature charts
- Humidity trends
- Wind speed graphs
- Precipitation forecasts
- Visual weather icons

🎨 **UI/UX**
- Beautiful gradient backgrounds
- Responsive design (mobile, tablet, desktop)
- Smooth animations
- Dark/Light theme support
- Real-time updates

🌡️ **Additional Features**
- Temperature unit toggle (Celsius/Fahrenheit)
- Sunrise/Sunset times
- Air quality data
- Dew point information
- Wind direction visualization

## Tech Stack

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP requests
- **Recharts** - Data visualization
- **Open-Meteo API** - Weather data (free, no auth required)

## Installation

```bash
cd weather-dashboard
npm install
```

## Development

```bash
npm start
```

The application will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## API Documentation

**Open-Meteo API** - Free weather API with no authentication
- **Website**: [open-meteo.com](https://open-meteo.com)
- **Docs**: [API Documentation](https://open-meteo.com/en/docs)
- **Endpoint**: `https://api.open-meteo.com/v1/forecast`

### Example Request

```bash
curl "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min"
```

## Usage

1. **Allow Location Access**: Click "Use Current Location" to enable geolocation
2. **Search for a City**: Type a city name in the search bar
3. **View Weather Data**: See current conditions and forecasts
4. **Save Favorites**: Click the star icon to save a location
5. **Switch Temperature Units**: Toggle between °C and °F
6. **View Detailed Charts**: Click on any day to see hourly breakdown

## Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── CurrentWeather.tsx
│   │   ├── ForecastCard.tsx
│   │   ├── HourlyForecast.tsx
│   │   ├── SearchBar.tsx
│   │   ├── WeatherChart.tsx
│   │   ├── FavoritesList.tsx
│   │   └── TemperatureToggle.tsx
│   ├── services/
│   │   ├── weatherApi.ts
│   │   ├── geolocation.ts
│   │   └── storage.ts
│   ├── types/
│   │   └── weather.ts
│   ├── utils/
│   │   ├── weatherIcons.ts
│   │   └── dateFormatter.ts
│   ├── hooks/
│   │   └── useWeather.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Browser Support

Works on all modern browsers that support:
- ES6+
- React 18
- Geolocation API
- LocalStorage
- CSS Grid/Flexbox

## Future Enhancements

- [ ] Push notifications for weather alerts
- [ ] Multiple language support
- [ ] Air quality index (AQI) integration
- [ ] Severe weather alerts
- [ ] Weather maps/radar
- [ ] Historical weather data
- [ ] Weather trends analysis
- [ ] Customizable widgets
- [ ] Export weather data as PDF/CSV
- [ ] Social sharing features

## License

MIT

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.
