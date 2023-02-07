import { React, useState } from "react";
import "./WeatherHour.scss";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const timeFormat = (mili) => {
  const date = new Date(mili * 1000);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const WeatherHour = () => {
  const dataWeather = useSelector((state) => state.weather.data);
  const hours = [];
  const temps = [];
  const feelLikes = [];

  const getHour = dataWeather?.hourly.map((hour) => [
    ...hours,
    timeFormat(hour?.temp),
  ]);
  const getTemp = dataWeather?.hourly
    .map((hour) => [...temps, hour?.temp])
    .flat();
  const getFellLike = dataWeather?.hourly
    .map((hour) => [...feelLikes, hour?.feels_like])
    .flat();

  const [data] = useState({
    labels: getHour,
    datasets: [
      {
        label: "Temp (°C)",
        data: getTemp,
        backgroundColor: "gray",
        borderColor: "#8e5ea2",
        pointBorderColor: "purple",
      },
      {
        label: "Feel like (°C)",
        data: getFellLike,
        backgroundColor: "g ray",
        borderColor: "#3cba9f",
        pointBorderColor: "aqua",
      },
    ],
  });
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default WeatherHour;
