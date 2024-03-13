import WeatherIcon from "./WeatherIcon.jsx";

function OneHour(props) {
    return (
        <div className='one-hour-data'>
            <p className='data-display-x-small-grey'>{props.time}</p>
            <WeatherIcon iconText={props.icon} iconType='one-hour-icon'/>
            <p className='data-display-x-small-black'>{props.temp}</p>
        </div>
    );
}

export default OneHour