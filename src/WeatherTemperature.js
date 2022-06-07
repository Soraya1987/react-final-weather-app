import React,{useState} from "react";

export default function WeatherTemperature(props){
    
        const[unit,setUnit]=useState("celsius");
        
        function showFahrenheit (event){
            event.preventDefault();
            setUnit("fahrenheit");
        }

        function showCelsios (event){
            event.preventDefault();
            setUnit("celsius");
        }

        function fahrenheit()
        {
            return((props.celsius*9)/5+32);
        }
         
        if(unit==="celsius"){
            return(
                <div className="WeatherTemperature">
                  <strong>{Math.round(props.celsius) }</strong>
                  <span className="units">
                      °C|{" "}<a href="/" onClick={showFahrenheit}>°F</a>
                  </span>
                
                </div>
            )
        }else{
            return(
                <div className="WeatherTemperature">
                  <strong>{Math.round(fahrenheit()) }</strong>
                  <span className="units">
                      <a href="/" onClick={showCelsios}>°C</a>{" "}|°F
                  </span>
                
                </div>
            )
        }
         
        

        
    
}