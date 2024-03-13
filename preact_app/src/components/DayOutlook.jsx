import WeatherIcon from "./WeatherIcon.jsx";

function DayOutlook(props) {
    return (
        <div className='day-outlook data-container'>
            <p className='data-label'>{props.date}</p>
            <div className='day-outlook-data'>
                <WeatherIcon iconText={props.icon} iconType='day-outlook-icon'/>
                <div className='day-outlook-temp-data'>
                    <div className='min-temp'>
                        <p className='data-label-bold'>Min</p>
                        <p className='data-display-medium'>{props.tempMin}</p>
                    </div>
                    <div className='max-temp'>
                        <p className='data-label-bold'>Max</p>
                        <p className='data-display-medium'>{props.tempMax}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DayOutlook