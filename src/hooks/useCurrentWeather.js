import { useState } from "react";

const apiKey = "f13ee716a17ce04c99a28931f587d6a2";

const useCurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (cityName) => {
    try {
      setWeatherData(null);
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) throw new Error("No results found");
        else if (response.status === 400) throw new Error("Bad Request");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const fetchWeatherDataByLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        try {
          setWeatherData(null);
          setLoading(true);
          setError(null);
          const response = await fetch(apiUrl);

          if (!response.ok) {
            if (response.status === 404) throw new Error("No results found");
            else if (response.status === 400) throw new Error("Bad Request");
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setWeatherData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return {
    weatherData,
    loading,
    error,
    fetchWeatherData,
    fetchWeatherDataByLocation,
  };
};

export default useCurrentWeather;
