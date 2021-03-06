import { useEffect } from "react";
const API_KEY = "addf758cdb43501c441349aff400d780";
const API_BASE_URL = "http://api.openweathermap.org/data/2.5/";

const fetchCurrentLocation = async (loc) => {
	const response = await fetch(
		`${API_BASE_URL}weather?q=${loc}&APPID=${API_KEY}`
	);

	const data = await response.json();

	console.log("lon lat:", data.coord);
	return data.coord;
};

const fetchAllWeather = async (loc) => {
	const response = await fetch(
		`${API_BASE_URL}onecall?lat=${loc.lat}&lon=${loc.lon}&APPID=${API_KEY}&units=metric`
	);
	const result = await response.json();
	console.log("loc data:", result);
	return {
		current: result.current,
		daily: result.daily,
	};
};

export default function useFetch(location) {
	useEffect(() => {
		const lonAndLat = fetchCurrentLocation(location);

		const weather = fetchAllWeather(lonAndLat);
		return weather;
	}, [location]);
}
