import { useState, useEffect } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './App.css'

const API_KEY = '5c7340979b43d3bf68119c75225907e0'; // Reemplázalo con tu clave API
const LATITUDE = -31.4167;  // Latitud de Córdoba
const LONGITUDE = -64.1833; // Longitud de Córdoba

function App() {
  const [airQualityData, setAirQualityData] = useState(null);
    // Función para conectarse a la API
    const fetchAirQualityData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}`
        );
        console.log(response.data); // Muestra los datos en la consola
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    
    useEffect(() => {
      fetchAirQualityData();
    }, []);

  return (
    <>
    <div className="container">
      <div className="App">
        <h1>Conexión a la API de OpenWeatherMap</h1>
      </div> 
    </div>
    
    <footer/>
    </>
  )
}

export default App
