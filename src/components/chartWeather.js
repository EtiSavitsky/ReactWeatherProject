import React, { useEffect, useState } from 'react'
import CityWeather from './cityWeather';
export default function ChartWeather() {
    const [citiesWeather, setCitiesWeather] = useState([]);

    useEffect(() => {

        fetch('http://api.openweathermap.org/data/2.5/group?id=2643743,5879092,295277,5128581&units=metric&appid=7ae8ccfbb3c794652c1916af0004862d&lang=he')
            .then(response => response.json())
            .then(data => (setCitiesWeather(data.list), console.log(data.list)))
    }, [])

    return (
        <div className='container'>
            {citiesWeather && citiesWeather.map((city) =>
                <CityWeather city={city}></CityWeather>)}
        </div>
    )
}
