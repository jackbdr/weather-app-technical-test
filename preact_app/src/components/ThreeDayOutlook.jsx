import DayOutlook from './DayOutlook.jsx';

function ThreeDayOutlook(props) {
    return (
        <div style='display:flex'>
        {props.locationThreeDayOutlookData &&
            props.locationThreeDayOutlookData.map(dayOutlookData => {
                return <DayOutlook {...dayOutlookData} city={props.city} class='resource'/>
        })}
        </div>
    );
}

export default ThreeDayOutlook