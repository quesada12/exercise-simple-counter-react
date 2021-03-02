import React from "react";
import PropTypes from "prop-types";
import "../../styles/style.css";

export function Home(props) {
	return (
		<div className="container">
			<h1 className="text-center">Simple Counter</h1>
			<div className="row d-flex justify-content-around text-center">
				<div className="col box">
					<i className="far fa-clock"></i>
				</div>
				<div className="col box">{props.number6}</div>
				<div className="col box">{props.number5}</div>
				<div className="col box">{props.number4}</div>
				<div className="col box">{props.number3}</div>
				<div className="col box">{props.number2}</div>
				<div className="col box">{props.number1}</div>
			</div>
		</div>
	);
}

Home.propTypes = {
	number1: PropTypes.string,
	number2: PropTypes.string,
	number3: PropTypes.string,
	number4: PropTypes.string,
	number5: PropTypes.string,
	number6: PropTypes.string
};
