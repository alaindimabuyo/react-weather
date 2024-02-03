import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Weather = () => {
  const apikey = import.meta.env.VITE_WEATHER_API;
  const params = useParams();
  const [data, setData] = useState(null);

  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&units=imperial&appid=${apikey}`;

  const fetchData = async () => {
    try {
      const response = await fetch(weatherApi);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const weatherData = await response.json();
      setData(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dateObj = new Date();
  let month = monthNames[dateObj.getUTCMonth()];
  let day = dateObj.getUTCDate() - 1;
  let year = dateObj.getUTCFullYear();

  let newdate = `${month} ${day}, ${year}`;

  return (
    <>
      <div class="bar"></div>
      <div class="titlebar">
        <p class="date">{newdate}</p>
        <h4 class="city">{data?.name}</h4>
        <p class="description">{data?.weather[0]?.description}</p>
      </div>
      <div class="temperature">
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
        />
        <h2>{Math.round(data?.main?.temp)}°F</h2>
      </div>
      <div class="extra">
        <div class="col">
          <div class="info">
            <h5>Wind Status</h5>
            <p>{data?.wind?.speed}mps</p>
          </div>
          <div class="info">
            <h5>Visibility</h5>
            <p>{data?.visibility} m</p>
          </div>
        </div>

        <div class="col">
          <div class="info">
            <h5>Humidity</h5>
            <p>{data?.main?.humidity}%</p>
          </div>
          <div class="info">
            <h5>Air pressure</h5>
            <p>{data?.main?.pressure} mph</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
