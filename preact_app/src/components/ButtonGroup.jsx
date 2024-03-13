function ButtonGroup(props) {

    return (
        <div className='button-group'>
            {props.cities.map(city => <button id={city} className={(props.selectedCity === city ? 'city-button city-button-selected' : 'city-button')} onClick={props.handleCityChange}>{city}</button> )}
        </div>
    );
}

export default ButtonGroup