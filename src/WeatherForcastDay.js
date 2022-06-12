import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherIcon";


export function WeatherForcastDay(props)
{
    function maxTemperature(){
        let Temperature=Math.round(props.data.temp.max);
        return `${Temperature}`;
    }
    function minTemperature(){
        let Temperature=Math.round(props.data.temp.min);
        return `${Temperature}`;
    }
    function day(){
        let date=new Date(props.data.dt*1000);
        let day=date.getDay();
     let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[day];
    }
    return(
        <div>
            <div className="weather-forcast-date border">{day()}</div>
            <div className="icon-Forcast">
                <WeatherIcon code={props.data.weather[0].icon} size={50}/>
            </div>
            
            <div className="weather-forcast-temperatures border p-1">
              <span className="weather-forcast-temprature-max ms-1">{maxTemperature()}</span>
              <span className="weather-forcast-temprature-min ms-5">{minTemperature()} </span>
            </div>
        </div>
         
    )
}