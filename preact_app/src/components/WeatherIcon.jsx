import sunny from '../assets/sunny.png';
import rainy from '../assets/rainy.png';
import cloudy from '../assets/cloudy.png';

function WeatherIcon(props) {

    // TODO Code Refactor
    // Wanted to use props.iconText.includes('sun)
    // Come back to this as the below code is horrible!

    return (
        <>
            {props.iconText === 'sun' || props.iconText === 'sunny' || props.iconText === 'clear-day' || props.iconText === 'clear' ? <img src={sunny} className={props.iconType} alt='Weather Icon' /> :
                (props.iconText === 'rain' || props.iconText === 'rainy' ? <img src={rainy} className={props.iconType} alt='Weather Icon' />
                    : <img src={cloudy} className={props.iconType} alt='Weather Icon' />)}
        </>
    );
}

export default WeatherIcon