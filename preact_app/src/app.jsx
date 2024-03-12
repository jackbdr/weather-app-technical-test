import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import axios from 'axios';

import CurrentWeather from './components/CurrentWeather.jsx';
import ThreeDayOutlook from './components/ThreeDayOutlook.jsx';
import TwentyFourHours from './components/TwentyFourHours.jsx';

import './app.scss';
import Header from "./components/Header.jsx";

export function App() {

	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')

	const [cities, setCities] = useState(null)
	const [city, setCity] = useState(null)
	
	const [locationCurrentData, setLocationCurrentData] = useState(null)
	const [locationThreeDayOutlookData, setLocationThreeDayOutlookData] = useState(null)
	const [locationTodayHourlyData, setLocationTodayHourlyData] = useState(null)

	const [allLocationsCurrentWeatherData, setAllLocationsCurrentWeatherData] = useState(null)
	const [allLocationsThreeDayOutlookData, setAllLocationsThreeDayOutlookData] = useState(null)
	const [allLocationsTodayHourlyData, setAllLocationsTodayHourlyData] = useState(null)

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/forecast')
			.then(res => {
				setAllLocationsCurrentWeatherData(res.data.currentWeather)
				setAllLocationsThreeDayOutlookData(res.data.threeDayOutlook)
				setAllLocationsTodayHourlyData(res.data.todayHourly)

				setCities(res.data.cities)
				setCity(res.data.cities[0])

				setLoading(false)
			})
			.catch(err => {
				setError(err.message);
				setLoading(false)
			});
	}, [])


	const handleCityChange = (e) => {
		setCity(e.target.id)
	}

	useEffect(() => {
		// Check city has been set, to avoid type errors on first render
		if (city) {
			setLocationCurrentData(allLocationsCurrentWeatherData[city])
			setLocationThreeDayOutlookData(allLocationsThreeDayOutlookData[city])
			setLocationTodayHourlyData(allLocationsTodayHourlyData[city])
		}
	}, [city])

	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{loading && <p>Forecasting...</p>}
			{ (!loading && !error) &&
				<div className='site-container'>
					<Header cities={cities} setCity={setCity} handleCityChange={handleCityChange} />
					<CurrentWeather {...locationCurrentData} city={city} />
					<ThreeDayOutlook  locationThreeDayOutlookData={locationThreeDayOutlookData} city={city} />
					<TwentyFourHours locationTodayHourlyData={locationTodayHourlyData} city={city} />
				</div>
			}
		</>
	);
}

render(<App />, document.getElementById('app'));
