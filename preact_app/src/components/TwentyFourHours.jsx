import OneHour from './OneHour.jsx';

function TwentyFourHours(props) {
    return (
        <div className='twenty-four-hours'>
            {props.locationTodayHourlyData &&
                props.locationTodayHourlyData.map(hourData => {
                    return <OneHour {...hourData} city={props.city} class='resource'/>
                })
            }
        </div>
    );
}

export default TwentyFourHours