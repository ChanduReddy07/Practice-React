import {useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import data from './data.json'
export default function App(){
    const [state, setState]=useState('')
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=4edc4564824cbb6fb07b02356b108912')
        .then((res)=>res.json())
        .then((json)=>setState(json.main.temp))
     
    return(
        <>
        <h1>App Component </h1>
        <h3>openweathermap API Built-in API request by City Name</h3>
        <h5>In fahrenheit : {Math.round(state)}</h5>

        <h5>In Celcious : {Math.round(state-273.15)}</h5>
            
        </>
    )
}
// export default App //line 4
//openweathermap.org  my profile API key==
//4edc4564824cbb6fb07b02356b108912  

//API CALL==  
//https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}

//browse== 
//https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4edc4564824cbb6fb07b02356b108912
