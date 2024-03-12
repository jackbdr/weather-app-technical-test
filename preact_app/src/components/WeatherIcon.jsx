import sunny from '../assets/sunny.png';
import rainy from '../assets/rainy.png';
import cloudy from '../assets/cloudy.png';

function WeatherIcon(props) {

    // TODO Code Refactor
    // Wanted to use props.iconText.includes('sun)
    // Come back to this as the below code is horrible!

    return (
        <>
            {props.iconText === 'sun' || props.iconText === 'sunny' ? <img src={sunny} alt='Weather App logo' /> :
                (props.iconText === 'rain' || props.iconText === 'rainy' ? <img src={rainy} alt='Weather App logo' />
                    : <img src={cloudy} alt='Weather App logo' />)}
        </>
    );
}

export default WeatherIcon