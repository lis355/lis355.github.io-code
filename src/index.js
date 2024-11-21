import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";
import "./styles/index.scss";

import App from "./components/App/App.js";

ReactDOM.createRoot(document.getElementById("root"))
	.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
