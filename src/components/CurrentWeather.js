import { useWeatherData } from "../context/WeatherCtx";
import DayCard from "./DayCard";
import classes from "./CurrentWeather.module.css";
import { useEffect } from "react";

const CurrentWeather = () => {
  const { currentWeather, setCityName } = useWeatherData();
  const { weatherData, loading, error } = currentWeather;

  useEffect(() => {
    if (weatherData) {
      setCityName(weatherData?.name);
    }
  }, [setCityName, weatherData]);

  const getWeatherData = () => {
    if (weatherData) {
      return (
        <>
          <h1 className={classes["city-name"]}>{weatherData?.name}</h1>
          <DayCard data={weatherData} />
        </>
      );
    }

    if (!loading && !error)
      return (
        <div className={classes["container-images"]}>
          <img src="./icon.png" alt="icon" className={classes.icon} />
        </div>
      );
    return <></>;
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {getWeatherData()}
    </>
  );
};

export default CurrentWeather;
