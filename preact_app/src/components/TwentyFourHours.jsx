import OneHour from './OneHour.jsx';

function TwentyFourHours(props) {
    return (
        <div style='display:flex;width:100%;overflow-x:scroll;'>
            {props.locationTodayHourlyData &&
                props.locationTodayHourlyData.map(hourData => {
                    return <OneHour {...hourData} city={props.city} class='resource'/>
                })
            }
        </div>
    );
}

export default TwentyFourHours