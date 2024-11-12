import React, { useState, useEffect } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Bangalore');
  const apiKey = 'your secretkey';   // from weatherapi.com
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('not found');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('somethii wen wrongg', error);
      }
    };
    fetchWeather();
  }, [apiUrl]);
  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      {weather ? (
        <div>
          <h2>{weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Condition: {weather.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
