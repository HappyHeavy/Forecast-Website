import { useRef } from "react";
import classes from "./Header.module.css";
import { useWeatherData } from "../context/WeatherCtx";
import Button from "../UI/Button";

const Header = () => {
  const cityNameRef = useRef();

  const { currentWeather, forecastWeather, setCityName, cityName } =
    useWeatherData();
  const { loading, fetchWeatherData, fetchWeatherDataByLocation } =
    currentWeather;

  const onInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      searchWeather();
    }
  };

  const searchWeather = async () => {
    fetchWeatherData(cityNameRef.current.value);
    forecastWeather.fetchWeatherData(cityNameRef.current.value);
  };

  const searchLocationAndWeather = () => {
    fetchWeatherDataByLocation();
    forecastWeather.fetchWeatherDataByLocation();
  };

  return (
    <header className={classes.head}>
      <h1>Weather Forecast</h1>
      <div className={classes["input-container"]}>
        <input
          ref={cityNameRef}
          type="text"
          id="cityInput"
          placeholder="Enter a city"
          value={cityName}
          onChange={onInputChange}
          onKeyDown={handleKeyPress}
        />
        <Button
          className={classes.btn}
          onClick={searchWeather}
          disabled={loading}
        >
          Search
        </Button>
        <Button
          className={classes.btn}
          onClick={searchLocationAndWeather}
          disabled={loading}
        >
          Get My Location
        </Button>
      </div>
    </header>
  );
};

export default Header;
