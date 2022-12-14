import React, { useState } from "react";
import axios from "axios";

function WeatherDisplay() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=83886fbe607f9b2d7d5c5444e557b6c6`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
            axios.get(url).then((response) => {
                setData(response.data);
                console.log(response.data);
                // document.getElementById('background')
                // document.body.style.backgroundImage = `url('./assets/01d.jpg')`
            });
            setLocation("");
        }
    };

    return (
        <div id="change-bg" className="app">
            <div className="search">
                <input id=""
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter Location"
                    type="text"
                />
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? (
                            <h1>{data.main.temp.toFixed()}°F</h1>
                        ) : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name != undefined && (
                    <div className="bottom">
                        <div className="feels">
                            <p>Feels like</p>
                            {data.main ? (
                                <p className="bold">
                                    {data.main.feels_like.toFixed()}°F
                                </p>
                            ) : null}
                        </div>
                        <div className="humidity">
                            <p>Humidity</p>
                            {data.main ? (
                                <p className="bold">{data.main.humidity}%</p>
                            ) : null}{" "}
                        </div>
                        <div className="wind">
                            <p>Wind Speed</p>
                            {data.wind ? (
                                <p className="bold">
                                    {data.wind.speed.toFixed()} MPH
                                </p>
                            ) : null}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WeatherDisplay;