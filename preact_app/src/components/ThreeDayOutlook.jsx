import DayOutlook from './DayOutlook.jsx';

function ThreeDayOutlook(props) {
    return (
        <div className='three-day-outlook'>
            <h3 className='section-label'>3 Day Outlook</h3>
            {props.locationThreeDayOutlookData &&
                props.locationThreeDayOutlookData.map(dayOutlookData => {
                    return <DayOutlook {...dayOutlookData} city={props.city} class='resource'/>
            })}
        </div>
    );
}

export default ThreeDayOutlook