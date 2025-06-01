const express = require('express');
const cors = require('cors');
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

// Ruta básica para el clima (mock por ahora)
app.get('/api/weather', (req, res) => {
  res.json({ 
    city: 'Madrid',
    temperature: 22,
    description: 'Soleado'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});