import { useEffect, useState } from "react";
import axios from "axios";
import Style from './styles.module.css'


function Weather() {

    const [weather, setWeather] = useState(null);
    const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code";

    const icons = {
        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        61: "🌧️",
        71: "❄️",
    };

    useEffect(() => {

        async function getWeather() {

            try {
                const response = await axios.get(API_URL);
                setWeather(response.data.current);

            } catch (error) {
                console.error(error)
            }
        }

        getWeather();

    }, []);

    if (!weather) {
        return <p>Carregando...</p>;
    }
    return (
        <div className={Style.container}>

            <h2>{icons[weather.weather_code]}Condições climaticas</h2>
            <h3> &#x1F4CD; São Paulo</h3>
            <div className={Style.item}>
                <span className={Style.icon}>🌡</span>
                <p>{weather.temperature_2m}°C</p>
            </div>

            <div className={Style.item}>
                <span className={Style.icon}>💧</span>
                <p>{weather.relative_humidity_2m}%</p>
            </div>

            <div className={Style.item}>
                <span className={Style.icon}>💨</span>
                <p>{weather.wind_speed_10m} km/h</p>
            </div>
        </div>
    );

}


export default Weather