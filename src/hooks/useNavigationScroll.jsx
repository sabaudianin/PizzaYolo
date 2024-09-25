import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useColorModeContext } from "../context/theme-color/ThemeModeProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const useNavigationScroll = () => {
	const [value, setValue] = useState(1);
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const { theme, toggleTheme } = useColorModeContext();
	const navigate = useNavigate();
	const muiTheme = useTheme();
	const isScreenSmall = useMediaQuery(muiTheme.breakpoints.down("md"));
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > window.innerHeight * 0.5) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleNavigate = (newValue) => {
		setValue(newValue);
		const targets = ["menu", "delivery", "localization", "contact"];
		navigate("/", { state: { target: targets[newValue] } });
	};

	return {
		value,
		setValue,
		drawerIsOpen,
		setDrawerIsOpen,
		theme,
		toggleTheme,
		isScreenSmall,
		isSticky,
		handleNavigate,
	};
};
