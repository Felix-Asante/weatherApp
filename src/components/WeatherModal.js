import React, { useRef, useState } from "react";
import forebg from "../img/forebg.jpg";
import snow from "../img/snow.png";
import cloud from "../img/cloud-shower.png";
import SubWeather from "./SubWeather";
import useFetch from "../hooks/useFetch";
const WeatherModal = (props) => {
	const styles = {
		backgroundImage: `url(${forebg})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundSize: "cover",
		height: "70%",
		width: "100%",
	};
	const [location, setLocation] = useState("seoul");
	const locationRef = useRef("");

	const locationWeatherResult = useFetch(location);
	console.log("location data:", locationWeatherResult);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setLocation(locationRef.current.value);
	};
	return (
		<div className="modal">
			<div className="weather-result" style={styles}>
				<form action="" onSubmit={onSubmitHandler}>
					<input type="text" placeholder="Marrakech" ref={locationRef} />
				</form>

				<div className="current-weather">
					<div className="d-flex gap-md align-center">
						<div className="temp">
							<p>
								20 <sup>o</sup>
							</p>
							<div className="btn day">Monday</div>
						</div>
						<img src={cloud} alt="" />
					</div>
				</div>
				<div className="bottom-details d-flex align-center gap-sm">
					<img src={snow} alt="" />
					<p>Weather</p>
				</div>
			</div>
			<div className="upcoming-results">
				<SubWeather />
				<SubWeather />
				<SubWeather />
				<SubWeather />
				<SubWeather />
				<SubWeather />
			</div>
		</div>
	);
};

export default WeatherModal;
