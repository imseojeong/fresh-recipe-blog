import { StyledWeather } from './Weather.styles'

const Weather = () => {
  return (
    <StyledWeather className="weather">
      <span className="weather-icon">{'☼'}</span>
      <p className="weather-info">
        <span className="weather-label">Today’s Weather:</span>
        <span className="weather-condition">{'Sunny'}</span>
      </p>
    </StyledWeather>
  )
}

export default Weather
