import { useState, useEffect, useContext, createContext, useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

const ColorModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
	const preferDarkMode = useMediaQuery("(prefer-color-scheme: dark)");

	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem("appTheme");
		return savedTheme || (preferDarkMode ? "dark" : "light");
	};

	const [theme, setTheme] = useState(getInitialTheme);

	const toggleTheme = () => {
		setTheme((prev) => {
			const newTheme = prev === "dark" ? "light" : "dark";
			localStorage.setItem("appTheme", newTheme);
			return newTheme;
		});
	};

	const themePreferences = useMemo(
		() => ({
			theme,
			toggleTheme,
		}),
		[theme]
	);

	useEffect(() => {
		const savedTheme = localStorage.getItem("appTheme");
		if (!savedTheme) {
			localStorage.setItem("appTheme", preferDarkMode ? "dark" : "light");
			setTheme(preferDarkMode ? "dark" : "light");
		}
	}, [preferDarkMode]);

	return (
		<ColorModeContext.Provider value={themePreferences}>
			{children}
		</ColorModeContext.Provider>
	);
};

export const useColorModeContext = () => useContext(ColorModeContext);

ThemeModeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
