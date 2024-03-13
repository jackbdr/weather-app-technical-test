import OneHour from './OneHour.jsx';

function TwentyFourHours(props) {
    return (
        <div className='twenty-four-hours'>
            <h3 className='section-label'>Hourly Forecast</h3>
            <div className='twenty-four-hours-data'>
                {props.locationTodayHourlyData &&
                    props.locationTodayHourlyData.map(hourData => {
                        return <OneHour {...hourData} city={props.city} />
                    })
                }
            </div>
        </div>
    );
}

export default TwentyFourHours