import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div className="weather-display">
      <div className="weather-card">
        <h2>{data.city}</h2>
        <div className="temperature">
          {data.temperature}°C
        </div>
        <div className="description">
          {data.description}
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;