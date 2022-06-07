import React,{useState} from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import axios  from "axios";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
    const[weatherData,setWeatherData]=useState({ready:false});
   
    const[city,setCity]=useState(props.defaultCity);
    function handleResponse(response){
        
        setWeatherData({
           ready:true,
           city: response.data.name,
           date: new Date(response.data.dt*1000),
           description: response.data.weather[0].description,
           icon:response.data.weather[0].icon,
           temprature: response.data.main.temp,
           humidity: response.data.main.humidity,
           wind: response.data.wind.speed
        });
      
    }
  
  function Search(){
    const apiKey="43f1d8f12b8168c4b7d63a4219944689";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function handleSubmit(event){
      event.preventDefault();
      Search();
  }
  function handleCityChange(event){
      setCity(event.target.value);
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
                     <span>{weatherData.day}</span>
                  </li>
                  <li>
                      <FormattedDate date={weatherData.date}/>
                  </li>
                  <li className="text-capitalize">{weatherData.description}</li>
                </ul>
              </div>
              <div className="col-6 ">
                <form onSubmit={handleSubmit}>
                  <div className="row p-3">
                    <div className="col-8 ">
                      <input
                        type="search"
                        placeholder="Type a city..."
                        className="form-control w-100 border"
                        onChange={handleCityChange}
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
                  <div className="float-left icon">
                      <WeatherIcon code={weatherData.icon} />
                  </div>
                  <WeatherTemperature celsius={weatherData.temprature}/>
                      
                  
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
    Search();
    return "loading...";
  }
 
}
