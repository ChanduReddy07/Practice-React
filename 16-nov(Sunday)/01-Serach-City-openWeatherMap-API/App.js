import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function WeatherComponent() {
    const [state, setState] = useState('');
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        if (state) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=4edc4564824cbb6fb07b02356b108912`)
                .then((res) => res.json())
                .then((json) => setTemp(json.main.temp))
                .catch((error) => console.error('Error fetching weather data:', error));
        }
    }, [state]);

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
            <>
            <input className='ms-5 mt-5' type="text" value={state} onChange={handleChange} placeholder="Enter city name" />
            <h3 className='ms-3 mt-4'>{temp !== null && <p>The temperature in <span className='text-warning text-uppercase'>{state}</span> is {Math.round(temp)}°C</p>}</h3>
            </>
    );
}

export default WeatherComponent;
