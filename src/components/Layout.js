import React from "react";
import BG from "../img/bg.jpg";
const Layout = (props) => {
	const styles = {
		backgroundImage: `url(${BG})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center center",
		backgroundSize: "cover",
		height: "100%",
		width: "100%",
	};
	return <div className="layout" style={styles}></div>;
};

export default Layout;
