import { useWeatherData } from "../context/WeatherCtx";
import DayCard from "./DayCard";

const ForecastList = () => {
  const { forecastWeather } = useWeatherData();
  const { weatherData, loading, error } = forecastWeather;

  const getWeatherData = () => {
    if (weatherData)
      return (
        <div>
          {weatherData.list.map((value, index) => {
            return <DayCard data={value} key={index} />;
          })}
        </div>
      );

    return <></>;
  };

  const forecastList = getWeatherData();
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {forecastList}
    </>
  );
};

export default ForecastList;
