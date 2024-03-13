function ButtonGroup(props) {

    return (
        <div className='button-group'>
            {props.cities.map(city => <button id={city} className={'city-button' + (props.selectedCity === city ? '-selected' : '')} onClick={props.handleCityChange}>{city}</button> )}
        </div>
    );
}

export default ButtonGroup