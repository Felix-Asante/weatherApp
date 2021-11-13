import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Layout from "./components/Layout";
import WeatherModal from "./components/WeatherModal";

const App = (props) => {
	return (
		<React.Fragment>
			<Layout />
			{ReactDOM.createPortal(
				<WeatherModal />,
				document.getElementById("modal")
			)}
		</React.Fragment>
	);
};

export default App;
