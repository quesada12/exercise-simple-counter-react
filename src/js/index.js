//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "../styles/index.scss";
import { Home } from "./component/home.js";

let n = 0;
setInterval(() => {
	let num = String(n++);
	ReactDOM.render(
		<Home
			number6={num[num.length - 6]}
			number5={num[num.length - 5]}
			number4={num[num.length - 4]}
			number3={num[num.length - 3]}
			number2={num[num.length - 2]}
			number1={num[num.length - 1]}
		/>,
		document.querySelector("#app")
	);
}, 1000);
