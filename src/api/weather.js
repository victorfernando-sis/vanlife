export async function getWeather(lat, long) {
    const response = await fetch(
        `${process.env.REACT_APP_OPENWEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        );
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error("An error occurred trying to get the weather info");
  }
}
