import logo from "../assets/weather-app-logo.png";
import ButtonGroup from "./ButtonGroup.jsx";

function Header(props) {
    return (
        <div className='header'>
            <div className='logo-title'>
                <img src={logo} alt='Weather App logo' />
                <h1>TMPR Weather</h1>
            </div>
            <ButtonGroup cities={props.cities} handleCityChange={props.handleCityChange} />
        </div>
    );
}

export default Header