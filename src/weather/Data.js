import React,{useState} from "react";
import "./data.css";
function Data() {
    const [temperature,settemperature]=useState("");
    const [ humidity,sethumidity]=useState("");
    const [ windspeed,setwindspeed]=useState("");
    const [feels_like,setfeels_like]=useState("");
    const [weather,setweather]=useState("");
    const [locc,setlocc]=useState("");
    const [wicon,setwicon]=useState("");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          console.log("Location not found.");
          return;
        }

        settemperature(data.main.temp);
        sethumidity(data.main.humidity);
        setwindspeed(data.wind.speed);
        setfeels_like(data.main.feels_like);
        setweather(data.weather[0].main);
        setlocc(data.name);
        setwicon("http://openweathermap.org/img/w/"+data.weather[0].icon+".png");
        console.log(data);
      })
      .catch((error) => {
        console.log("Error occurred:", error);
      });
  }
  function errorCallback(error) {
    console.log("Error getting location: " + error.message);
  }
  return (
    <div class="display-box">
      <div class="icon-box">
        <img src={wicon} width="70px" alt="" />
        <h4>{weather}</h4>
      </div>
      <div class="temp">
        <p>
          {temperature}
          <sup>°C</sup>
        </p>
      </div>
      <div class="data">
        <h4>Windspeed: {windspeed} km/h</h4>
        <h4>Humidity: {humidity}%</h4>
        <h4>Feels_like: {feels_like}°C</h4>
      </div>
      <div class="location">
        <h4>{locc}</h4>
      </div>
    </div>
  );
}
export default Data;
