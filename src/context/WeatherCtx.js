import React, { createContext, useContext, useState } from "react";
import useForeacstWeather from "../hooks/useForecastWeather";
import useCurrentWeather from "../hooks/useCurrentWeather";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const forecastWeather = useForeacstWeather();
  const currentWeather = useCurrentWeather();
  const [cityName, setCityName] = useState("");

  return (
    <WeatherContext.Provider
      value={{
        forecastWeather,
        currentWeather,
        cityName,
        setCityName,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherData = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherData must be used within a WeatherProvider");
  }
  return context;
};
