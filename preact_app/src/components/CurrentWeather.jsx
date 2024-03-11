function CurrentWeather(props) {
    return (
        <div
            class="resource">
            <p>{props.city} temp -> {props.temp}</p>
            <p>{props.city} wind -> {props.wind}</p>
        </div>
    );
}

export default CurrentWeather