import React from "react";

export default function(props){
   
    let hourse=props.date.getHours();
    if(hourse<10){hourse=`0${hourse}`;}
    let minutes=props.date.getMinutes();
    if(minutes<10){minutes=`0${minutes}`;}
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
    let day=days[props.date.getDay()];
    let year=props.date.getFullYear();
    let month=props.date.getMonth()+1;  
  if (month<10){
    month=`0${month}`;
  }
  
  let numDay=props.date.getDate();
  if(numDay<10){
    numDay=`0${numDay}`;
  }
    
    
    return (<div>
            <ul>
                <li>{day} {hourse}: {minutes}</li>
                <li> {year}-{month}-{numDay}</li>
            </ul>
               
           </div>) ;
}