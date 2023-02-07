import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./WeatherWeek.scss";

function WeatherWeek() {
  const data = useSelector((state) => state.weather.data);
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [content, setContent] = useState(data.daily[0]);

  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000);
    return (
      WEEK_DAYS[date.getDay()] +
      ", " +
      date.getDate() +
      "/" +
      (date.getMonth() + 1)
    );
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
    <div className="weatherWeek">
      <div className="weatherWeek-inner">
        {data.daily.map((day, index) => (
          <div
            key={index}
            onClick={() => setContent(day)}
            className="weatherWeek-item"
          >
            <div
              className={`${
                day?.dt === content?.dt ? "bg-blue" : ""
              } weatherWeek-content`}
            >
              <p className="name">{dateFormat(day?.dt)}</p>
              <div className="content">
                <img
                  src={`https://openweathermap.org/img/w/${day.weather[0]?.icon}.png`}
                  alt=""
                />
                <p>
                  {Math.round(day?.temp.min)}° - {Math.round(day?.temp.max)}°
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dayInfo">
        <p>{dateFormat(content?.dt)}</p>
        <div className="dayInfo-inner">
          <div className="dayInfo-left">
            <p>Temp current : {content?.temp?.day} °C</p>
            <p>
              Temp : {content?.temp?.min} °C - {content?.temp?.max} °C
            </p>
            <p>Humidity : {content?.humidity} %</p>
            <p>
              Wind speed : {Math.round(content?.wind_speed * 3.6 * 100) / 100}{" "}
              km/h
            </p>
          </div>
          <div className="dayInfo-right">
            <p>Sunrise : {timeFormat(content?.sunrise)}</p>
            <p>Sunset : {timeFormat(content?.sunrise)}</p>
            <p>Description : {content?.weather[0]?.description}</p>
            <p>Atmospheric pressure : {content?.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherWeek;
