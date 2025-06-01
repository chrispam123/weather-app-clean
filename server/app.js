const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Weather API Server is running!' });
});

// Ruta del clima con API real
app.get('/api/weather', async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'Ciudad es requerida' });
    }

    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`;
    
    const response = await axios.get(url);
    const data = response.data;
    
    // Extraer solo datos básicos
    const weatherData = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description
    };
    
    res.json(weatherData);
    
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'No se pudo obtener el clima para esa ciudad' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});