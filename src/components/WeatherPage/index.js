import { useState } from "react";
import "./WeatherPage.css"

const WeatherPage = () => {
    const [location, setLocation] = useState("")
    const apiKey = "4e1fad9363c99db7f1af55ce5c563d15";
    const lat = 37.7749;
    const long = 122.4194;

    const getCoordinates = () => {
        const geocoder = new google.maps.Geocoder();
        
    }

    const getWeather = () => {
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`,
          {
            method: "GET"
          }
        )
          .then((response) => {
            console.log(response.json());
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