import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AirQualityCard from '../src/componentes/AirQualityCard'; // Importa el componente

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
      setAirQualityData(response.data.list[0]); // Guardar solo la información relevante
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
          <h1>Calidad del Aire en Córdoba</h1>
          
          {airQualityData ? (
            <AirQualityCard data={airQualityData} />
          ) : (
            <p>Cargando datos...</p>
          )}
        </div>
      </div>

      <footer />
    </>
  );
}

export default App;

