import React,{useState} from "react";
import axios  from "axios";
import "./Weather.css";

export default function Weather(props) {
    const[weatherData,setWeatherData]=useState({ready:false});

    function handleResponse(response){
        setWeatherData({
           ready:true,
           city: response.data.name,
           day: "Sunday 09:00",
           date: "2022-05-12",
           description: response.data.weather[0].description,
           iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
           temprature: response.data.main.temp,
           humidity: response.data.main.humidity,
           wind: response.data.wind.speed
        });
      
    }
    
  

  if(weatherData.ready){
       return (
    <div className="weather  border">
      <div className="overview border p-2">
        <div className="row">
          <div className="col-8">
            <div className="row ">
              <div className="col-6">
                <h1>{weatherData.city}</h1>
                <ul>
                  <li>
                    Last updated: <span>{weatherData.day}</span>
                  </li>
                  <li>{weatherData.date}</li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6 ">
                <form>
                  <div className="row p-3">
                    <div className="col-8 ">
                      <input
                        type="search"
                        placeholder="Type a city..."
                        className="form-control w-100 border"
                      />
                    </div>

                    <div className="col-4 ">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn-primary w-100"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="row ">
              <div className="col-6 ">
                <div className="clearfix weather-temprature">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    className="float-left "
                    width="100"
                  />
                  <strong>{Math.round(weatherData.temprature) }</strong>
                  <span className="units">
                    <a href="/">°C</a>|<a href="/">°F</a>
                  </span>
                </div>
              </div>
              <div className="col-6 p-4">
                <ul> 
                  <li>Humidity: {weatherData.humidity} %</li>
                  <li>Wind:{Math.round(weatherData.wind) }km/h</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img src="./img/allWeather.jpg" alt="" className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
  }else{
    const apiKey="43f1d8f12b8168c4b7d63a4219944689";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
 
}
