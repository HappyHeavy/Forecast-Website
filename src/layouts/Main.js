import Container from "../components/Container";
import CurrentWeather from "../components/CurrentWeather";
import { useWeatherData } from "../context/WeatherCtx";
import ForecastDisplay from "../components/ForecastDisplay";

const Main = () => {
  const { currentWeather } = useWeatherData();
  const { weatherData } = currentWeather;

  return (
    <main>
      <Container>
        <CurrentWeather />
      </Container>
      {weatherData && <ForecastDisplay />}
    </main>
  );
};

export default Main;
