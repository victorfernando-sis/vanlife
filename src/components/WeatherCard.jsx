import React from "react";
import moment from "moment";

function WeatherCard(props) {
  const weatherData = props.weatherData;
  console.log(weatherData);

  return (
    <div className="weather-card">
      <div className="weather-card-degree">
        <span className="description">{weatherData.weather[0].main}</span>
        <span className="temp"> {weatherData.main.temp.toFixed(0)}&deg;</span>
      </div>
      <div className="weather-card-date-location">
        <span className="day">
          {moment().format("dddd")}, <span>{moment().format("LL")}</span>
        </span>
        <span className="weather-card-header">{weatherData.name}</span>
      </div>
      <div className="icon">
        <img alt={`${weatherData.weather[0].main} weather`} src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>
        {/* <p>{weatherData.weather[0].icon}</p> */}
      </div>
    </div>
  );
}

export default WeatherCard;
