function CurrentWeather(props) {
    return (
        <div className='resource'>
            <p>{props.city} temp -> {props.temp}</p>
            <p>{props.city} windSpeed -> {props.windSpeed}</p>
            <p>{props.city} windDirection -> {props.windDirection}</p>
            <p>{props.city} icon -> {props.icon}</p>
            <p>{props.city} sunrise -> {props.sunrise}</p>
            <p>{props.city} sunset -> {props.sunset}</p>
            <p>{props.city} rain -> {props.rain}</p>
        </div>
    );
}

export default CurrentWeather