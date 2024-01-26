import { useState } from "react";
import Container from "./Container";
import ForecastList from "./ForecastList";
import classes from "./ForecastDisplay.module.css";
import Button from "../UI/Button";
import { useWeatherData } from "../context/WeatherCtx";

const ForecastDisplay = () => {
  const [isHide, setIsHide] = useState(true);
  const { currentWeather, forecastWeather } = useWeatherData();

  const toggleHide = () => {
    setIsHide((isHide) => !isHide);
  };

  return (
    <>
      <div className={classes["input-container"]}>
        <Button
          className={classes.btn}
          disabled={currentWeather.loading || forecastWeather.loading}
          onClick={toggleHide}
        >
          {isHide ? "Show More" : "Show Less"}
        </Button>
      </div>
      {!isHide && (
        <Container>
          <ForecastList />
        </Container>
      )}
    </>
  );
};

export default ForecastDisplay;
