import React, { useEffect, useState } from 'react'

export default function CityWeather(props) {
    const city = props.city
    const [srcImg, setSrcImg] = useState()
     
    const cityName = new Map();
    cityName.set("London", "לונדון")
    cityName.set("Eilat", "אילת")
    cityName.set("New York", "ניו יורק")
    cityName.set("Alaska", "אלסקה")

    useEffect(() => {
        const feelsLike = Math.round(city.main.feels_like);
        if (feelsLike <= 20)
            setSrcImg("http://openweathermap.org/img/w/04d.png")
        else if (feelsLike > 20 && feelsLike <= 30)
            setSrcImg("http://openweathermap.org/img/w/02d.png")
        else setSrcImg("http://openweathermap.org/img/w/01d.png");

    }, [])

    return (
        <div className='city-card '>
            <div className=''>
                <div className='first-row'>
                    <h1>{cityName.get(city.name)}</h1>
                    <img src={srcImg} />
                </div>
                <p>{city.weather[0].description}</p>
                <div className='container temp-details'>
                    <div className='row'>
                        <div className='col'>
                            <p >טמפ' קיימת</p>
                            <p className='temp'>{Math.round(city.main.temp)}°C</p>
                        </div>
                        <div className='col'>
                            <p >טמפ' מורגשת</p>
                            <p className='temp'>{Math.round(city.main.feels_like)}°C</p>
                        </div>
                        <div className='col'>
                            <p >לחות</p>
                            <p >{city.main.humidity}%</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
