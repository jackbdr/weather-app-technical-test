function OneHour(props) {
    return (
        <div className="resource">
            <p>{props.city} time -> {props.time}</p>
            <p>{props.city} temp -> {props.temp}</p>
            <p>{props.city} icon -> {props.icon}</p>
        </div>
    );
}

export default OneHour