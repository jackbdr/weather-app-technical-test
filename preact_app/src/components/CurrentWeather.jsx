import WeatherIcon from "./WeatherIcon.jsx";

function CurrentWeather(props) {
    return (
        <div className='current-weather'>
            <h5 className='section-label'>Current</h5>
            <div className='resource current-weather-data'>
                <div className='temp'>
                    <p className='data-label'>Temp</p>
                    <div className='temp-data'>
                        <WeatherIcon iconText={props.icon} />
                        <p className='data-display-large'>{props.temp}</p>
                    </div>
                </div>
                <div className='rain'>
                    <p className='data-label'>Rain</p>
                    <p className='data-display-large'>{props.rain}</p>
                </div>
                <div className='wind'>
                    <p className='data-label'>Wind</p>
                    <p className='data-display-large'>{props.windDirection + ' ' + props.windSpeed}</p>
                </div>
                <div className='sunrise-sunset'>
                    <p className='data-label'>Sunrise</p>
                    <p className='data-display-small'>{props.sunrise}</p>
                    <p className='data-label'>Sunset</p>
                    <p className='data-display-small'>{props.sunset}</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather