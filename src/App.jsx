import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { Home } from "./pages/home/Home";
import { useColorModeContext } from "./context/theme-color/ThemeModeProvider";
import { AppLayout } from "./components/appLayout/AppLayout";
import "./App.css";
import { Menu } from "./pages/menu/Menu";

export const App = () => {
	const { theme } = useColorModeContext();

	const muiTheme = useMemo(
		() => createTheme({ palette: { mode: theme } }),
		[theme]
	);

	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/localization" element={<Home />} />
						<Route path="/menu" element={<Menu />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
