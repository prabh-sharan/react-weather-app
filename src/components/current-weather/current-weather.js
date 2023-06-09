
import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <p className="cityName">Delhi</p>
                <p className="weather-description">Cloudy</p>
            </div>
            <img alt="weather" className="weather-icon" src="icons/01d.png" />
        </div>
    )
}

export default CurrentWeather