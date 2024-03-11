import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import axios from 'axios';

import CurrentWeather from './components/CurrentWeather.jsx';
import './app.scss';

export function App() {

	useEffect(() => {
		const testApi = async () => {
			try {
				const { data } = await axios.get('http://127.0.0.1:8000/api/forecast')
				console.log(data)
			} catch (err) {
				console.log(err)
			}
		}
		testApi()
	}, [])

	const [city, setCity] = useState('London')

	const handleCityChange = (e) => {
		// console.log(e.target.id)

		setCity(e.target.id)
	}

	const dummyDataCurrentCities = {
		temp: {
			'London': 21,
			'Paris': 15,
			'New York': 15,
		},
		wind: {
			'London': 55,
			'Paris': 54,
			'New York': 10,
		}
	}

	let displayCurrentWeather = {
		temp: dummyDataCurrentCities.temp[city],
		wind: dummyDataCurrentCities.wind[city],
	}

	return (
		<div>
			<section>
				<CurrentWeather {...displayCurrentWeather} city={city} class='resource' />
				<button id='London' onClick={handleCityChange}>London</button>
				<button id='Paris' onClick={handleCityChange}>Paris</button>
				<button id='New York' onClick={handleCityChange}>New York</button>
			</section>
		</div>
	);
}

render(<App />, document.getElementById('app'));
