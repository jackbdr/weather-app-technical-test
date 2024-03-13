import WeatherIcon from "./WeatherIcon.jsx";

function CurrentWeather(props) {
    return (
        <div className='current-weather'>
            <h3 className='section-label'>Current</h3>
            <div className='current-weather-data data-container'>
                <div className='label-data temp'>
                    <p className='data-label'>Temp</p>
                    <div className='temp-data'>
                        <WeatherIcon iconText={props.icon} iconType='current-weather-icon'/>
                        <p className='data-display-large'>{props.temp}</p>
                    </div>
                </div>
                <div className='label-data rain'>
                    <p className='data-label'>Rain</p>
                    <p className='data-display-large'>{props.rain}</p>
                </div>
                <div className='label-data wind'>
                    <p className='data-label'>Wind</p>
                    <p className='data-display-large'>{props.windDirection + ' ' + props.windSpeed}</p>
                </div>
                <div className='label-data sunrise-sunset'>
                    <p className='data-label'>Sunrise</p>
                    <p className='data-display-sun data-display-large'>{props.sunrise}</p>
                    <p className='data-label'>Sunset</p>
                    <p className='data-display-sun data-display-large'>{props.sunset}</p>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather