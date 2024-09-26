import { useState, useEffect, useMemo } from "react";

import { useColorModeContext } from "../context/theme-color/ThemeModeProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export const useWindowScroll = () => {
	const [value, setValue] = useState(null);
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const { theme, toggleTheme } = useColorModeContext();
	const muiTheme = useTheme();
	const [isSticky, setIsSticky] = useState(false);
	const isScreenSmall = useMediaQuery(muiTheme.breakpoints.down("md"));

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

	useEffect(() => {
		setValue(null);
	}, []);

	return {
		value,
		setValue,
		drawerIsOpen,
		setDrawerIsOpen,
		theme,
		toggleTheme,
		isScreenSmall,
		isSticky,
	};
};
