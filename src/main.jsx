import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import "leaflet/dist/leaflet.css";

import { ThemeModeProvider } from "./context/theme-color/ThemeModeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeModeProvider>
			<App />
		</ThemeModeProvider>
	</React.StrictMode>
);
