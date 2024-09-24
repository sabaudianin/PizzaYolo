import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CallIcon from "@mui/icons-material/Call";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useColorModeContext } from "../../context/theme-color/ThemeModeProvider";
import { Logo } from "../Logo/Logo";
import { RenderDrawerMenu } from "./renderDrawerMenu";
import useMediaQuery from "@mui/material/useMediaQuery";

// Optymalizowany komponent CustomBottomNavigation:
export const CustomBottomNavigation = styled(BottomNavigation)(() => ({
	height: "10vh",
	position: "relative",

	"& .Mui-selected": {
		color: "red",
	},
	"& .MuiBottomNavigationAction-label": {
		fontSize: 20,
		fontWeight: "bold",
	},
	"& .MuiBottomNavigationAction-root:hover": {
		color: "pink",
		textShadow: "0 0 5px pink",
		"& .MuiSvgIcon-root": {
			color: "pink",
		},
	},
}));

export const SimpleNavigation = () => {
	const [value, setValue] = useState(-1);
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);
	const { theme, toggleTheme } = useColorModeContext();
	const navigate = useNavigate();
	const muiTheme = useTheme();
	const isScreenSmall = useMediaQuery(muiTheme.breakpoints.down("md"));

	const handleNavigate = (newValue) => {
		setValue(newValue);
		const targets = ["menu", "delivery", "localization", "contact"];
		navigate("/", { state: { target: targets[newValue] } });
	};

	return (
		<Box
			sx={{
				position: "relative",
				boxShadow: "-7px 33px 99px -2px rgba(145,140,145,1)",
				height: "10vh",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
				padding: "0 2rem",
				background: "url(/pizza70.jpg) center/cover no-repeat",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					zIndex: 1,
				}}
			/>
			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					display: "flex",
					alignItems: "center",
				}}
			>
				<Logo />
			</Box>

			{isScreenSmall ? (
				<>
					<IconButton
						edge="start"
						aria-label="menu"
						onClick={() => setDrawerIsOpen(true)}
						sx={{ zIndex: 2, position: "relative" }}
					>
						<MenuIcon sx={{ fontSize: 38 }} />
					</IconButton>
					<RenderDrawerMenu
						handleNavigate={handleNavigate}
						drawerIsOpen={drawerIsOpen}
						setDrawerIsOpen={setDrawerIsOpen}
					/>
				</>
			) : (
				<CustomBottomNavigation
					sx={{
						flexGrow: 1,
						zIndex: 2,
						position: "relative",
						background: "none",
					}}
					showLabels
					value={value}
					onChange={(event, newValue) => handleNavigate(newValue)}
				>
					<BottomNavigationAction
						label="MENU"
						sx={{ color: "pink" }}
						icon={<MenuBookIcon fontSize="large" sx={{ color: "#pink" }} />}
					/>
					<BottomNavigationAction
						label="DOSTAWA"
						sx={{ color: "pink" }}
						icon={
							<DeliveryDiningIcon fontSize="large" sx={{ color: "pink" }} />
						}
					/>
					<BottomNavigationAction
						label="LOKALIZACJA"
						sx={{ color: "pink" }}
						icon={<LocationOnIcon fontSize="large" sx={{ color: "pink" }} />}
					/>
					<BottomNavigationAction
						label="KONTAKT"
						sx={{ color: "pink" }}
						icon={<CallIcon fontSize="large" sx={{ color: "pink" }} />}
					/>
				</CustomBottomNavigation>
			)}

			<IconButton
				sx={{ ml: 1, position: "absolute", top: "10vh" }}
				onClick={toggleTheme}
			>
				{theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
		</Box>
	);
};

export const Navigation = () => {
	return <SimpleNavigation />;
};
