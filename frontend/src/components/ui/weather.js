import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ui/weather.css";
import cityist from "../cities_list";
import { WiHumidity } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";
import { WiThermometer } from "weather-icons-react";

function Weather() {
  const [icon, setIcon] = useState();
  const [description, setDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  const [name, setName] = useState("");
  if (!name) {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=london&appid=fe5020d8dbf399a7c40ed4cd37fb5c74&lang=en`
      )
      .then((result) => {
        console.log(result.data);
        setIcon(result.data.weather[0].icon);
        setDescription(result.data.weather[0].description);
        setTemperature(result.data.main.temp);
        setHumidity(result.data.main.humidity);
        setWind(result.data.wind.speed);

        setName(result.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const changeHandler = (e) => {
    // .get(
    //   `http://api.weatherbit.io/v2.0/current?&city=${e.target.value}&key=5a29c29a396441bfa77f13c5e4b922f8&include=minutely&lang=en`
    // )
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=fe5020d8dbf399a7c40ed4cd37fb5c74&lang=en`
      )
      .then((result) => {
        console.log(result.data);
        setIcon(result.data.weather[0].icon);
        setDescription(result.data.weather[0].description);
        setTemperature(result.data.main.temp);
        setWind(result.data.wind.speed);
        setHumidity(result.data.main.humidity);

        setName(result.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="weather_div">
      <p>Weather</p>
      <select className="weather_select" onChange={changeHandler}>
        <option>london</option>

        {cityist.map((ui, i) => {
          return <option key={i}>{ui}</option>;
        })}
      </select>
      <div className="weather_details">
        <p>{name}</p>
        <h1>{description}</h1>

        <div className="weather_img">
          {description && (
            <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`}></img>
          )}
        </div>
      </div>

      <div className="weather_item">
        <div className="weather_item_sub">
          <WiThermometer size={40} color="#000" />

          <h1>{`${temperature} °F`}</h1>

          <div className="weather_item_sub">
            <WiHumidity size={40} color="#000" />
            <h1>{humidity}%</h1>
          </div>
          <div className="weather_item_sub">
            <WiStrongWind size={40} color="#000" />
            <h1>{wind} m/s</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
