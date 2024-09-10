// AirQualityCard.js
import React from 'react';
import './AirQualityCard.css';

const AirQualityCard = ({ data }) => {
  return (
    <div className="card">
      <h2>Índice de Calidad del Aire: {data.main.aqi}</h2>
      <p>CO: {data.components.co} μg/m³</p>
      <p>NO: {data.components.no} μg/m³</p>
      <p>NO2: {data.components.no2} μg/m³</p>
      <p>O3: {data.components.o3} μg/m³</p>
      <p>SO2: {data.components.so2} μg/m³</p>
      <p>PM2.5: {data.components.pm2_5} μg/m³</p>
      <p>PM10: {data.components.pm10} μg/m³</p>
      <p>NH3: {data.components.nh3} μg/m³</p>
    </div>
  );
};

export default AirQualityCard;
