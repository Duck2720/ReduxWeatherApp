import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CurrentWeather.scss";

const CurrentWeather = () => {
  const dataCity = useSelector((state) => state.weather.dataCity);
  const data = useSelector((state) => state.weather.data);
  console.log(dataCity);
  console.log("data", data);
  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000);
    return WEEK_DAYS[date.getDay()];
  };

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

  return (
    <div className="currentWeather">
      <div className="currentWeather-inner">
        <div className="cityName">{dataCity.name}</div>
        <div className="temperature">{dataCity.main?.temp}°C</div>
        <div className="day">
          {dateFormat(data.current?.dt)}, {timeFormat(data.current?.dt)}{" "}
        </div>
        <div className="overcast">{data.current?.weather[0]?.description}</div>
        <div className="clouds">
          {" "}
          {data.current?.weather[0]?.main} {`${data.current?.clouds}%`}
        </div>
        <div className="img-banner">
          <img src={require("../../imgs/banner.webp")}></img>
          <span className="namecity-img">{dataCity.name}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
