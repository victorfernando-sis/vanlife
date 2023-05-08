import React, { useEffect, useState } from "react";
import { getWeather } from "../api/weather";
import WeatherCard from "./WeatherCard";

function Forecast() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      try {
        const response = await getWeather(lat, long);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [lat, long]);

  return <>{data && <WeatherCard weatherData={data} />}</>;
}

export default Forecast;
