import React,{useState,useEffect} from "react";
import "./WeatherForcastDay";
import "./WeatherForcast.css"
import axios  from "axios";
import { WeatherForcastDay } from "./WeatherForcastDay";

export default function WeatherForcast(props){
    let[loaded,setLoaded]=useState(false);
    let[forcast,setForcast]=useState(null);
     
    useEffect(()=>{setLoaded(false);},[props.coordinates])
    function handleResponse(response){
     setForcast(response.data.daily);
     setLoaded(true);
    }
    if(loaded){
        console.log(forcast);
    return (
        <div className="row">
            {
                forcast.map(
                    function(dailyForcast,index){
                        if(index<7){
                            return(
                            <div className="card col m-1 border round"  key={index}>
                                <WeatherForcastDay data={dailyForcast}/>
                            </div>
                        );
                        }else{
                            return null;
                        }
                        
                    }
                )
            }
          
        </div>     
    )
    }else{
    let apiKey="43f1d8f12b8168c4b7d63a4219944689";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }
    
    


}