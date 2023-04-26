import { useState } from "react";
import "./WeatherPage.css"

const WeatherPage = () => {
    const [location, setLocation] = useState("")
    const apiKey = ;
    const lat = 37.7749;
    const long = 122.4194;

    const getWeather = () => {
        fetch(
          "https://api.openweathermap.org/data/3.0/onecall?lat=37.7749&lon=122.4194&appid=",
          {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
          }
        )
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    return(
        <div className="weather-container">
            <label> Input City Name
                <input type="textbox" onChange={(e) => setLocation(e.target.value)}></input>
            </label>
            <button onClick={getWeather}>Generate Weather at this Location</button>
        </div>
    )
}

export default WeatherPage;