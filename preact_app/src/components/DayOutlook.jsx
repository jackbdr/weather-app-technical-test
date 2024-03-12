function DayOutlook(props) {
    return (
        <div className="resource">
            <p>{props.city} date -> {props.date}</p>
            <p>{props.city} tempMax -> {props.tempMax}</p>
            <p>{props.city} tempMin -> {props.tempMin}</p>
            <p>{props.city} icon -> {props.icon}</p>
        </div>
    );
}

export default DayOutlook