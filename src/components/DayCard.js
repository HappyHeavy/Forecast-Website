import { useState } from "react";
import classes from "./DayCard.module.css";

const DayCard = ({ data }) => {
  const [isTurned, setIsTurned] = useState(false);

  const turnAround = () => {
    setIsTurned((isTurned) => !isTurned);
  };

  const dateTime = new Date(data.dt * 1000);
  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  const formattedTime = dateTime.toLocaleTimeString(undefined, timeOptions);
  const temperature = data.main.temp;
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const windDirection = data.wind.deg;

  return (
    <div className={classes["weather-card"]} onClick={turnAround}>
      <div
        className={`${classes["weather-card-inner"]} ${
          isTurned ? classes["turn-around"] : ""
        }`}
      >
        <div className={classes["card-front"]}>
          <h2>{dateTime.toDateString()}</h2>
          <p>Time: {formattedTime}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="Weather Icon"
            className={classes["weather-icon"]}
          />
          <p className={classes.temperature}>
            Temperature: <span>{temperature}°C</span>
          </p>
          <p className={classes.description}>
            Description: <span>{description}</span>
          </p>
        </div>
        <div className={classes["card-back"]}>
          <div className={classes["weather-details"]}>
            <div className={classes["weather-detail"]}>
              <img
                className={classes["weather-icon-small"]}
                src="./img/humidity.png"
                alt="Humidity"
              />
              <p>Humidity: {humidity}%</p>
            </div>
            <div className={classes["weather-detail"]}>
              <img
                className={classes["weather-icon-small"]}
                src="./img/pressure.png"
                alt="Pressure"
              />
              <p>Pressure: {pressure} hPa</p>
            </div>
            <div className={classes["weather-detail"]}>
              <img
                className={classes["weather-icon-small"]}
                src="./img/windspeed.png"
                alt="WindSpeed"
              />
              <p>Wind Speed: {windSpeed} m/s</p>
            </div>
            <div className={classes["weather-detail"]}>
              <img
                style={{ transform: `rotate(${windDirection}deg)` }}
                className={classes["weather-icon-small"]}
                src="./img/winddirection.png"
                alt="WindDirection"
              />
              <p>Wind Direction: {windDirection}°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
