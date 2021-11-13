import React from "react";
import shower from "../img/shower.png";

const SubWeather = (props) => {
	return (
		<div className="sub-weather d-flex flex-column align-center gap-sm">
			<p className="badge">TUE</p>
			<img src={shower} alt="" />
			<div className="temperature">
				<p>
					25 <sup>o</sup>
				</p>
			</div>
		</div>
	);
};

export default SubWeather;
