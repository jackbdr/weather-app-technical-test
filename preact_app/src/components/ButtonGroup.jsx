function ButtonGroup(props) {
    return (
        <div>
            {props.cities.map(city => <button id={city} onClick={props.handleCityChange}>{city}</button> )}
        </div>
    );
}

export default ButtonGroup