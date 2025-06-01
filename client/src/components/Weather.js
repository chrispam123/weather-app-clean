import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import './Weather.css';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    
    try {
      // Por ahora conectamos con nuestro backend local
      const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError('Error al obtener datos del clima');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p>Cargando...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default Weather;