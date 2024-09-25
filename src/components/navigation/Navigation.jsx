import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
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
import { Logo } from "../Logo/Logo";
import { RenderDrawerMenu } from "./renderDrawerMenu";
import { CallBox } from "../../components/callBox/CallBox";
import { phoneNumber } from "../../constants";
import { useNavigationScroll } from "../../hooks/useNavigationScroll";

export const CustomBottomNavigation = styled(BottomNavigation)(() => ({
	height: "10vh",
	position: "relative",

	"& .Mui-selected": {
		color: "var(--secondaryColor)",
		"& .MuiSvgIcon-root": {
			color: "var(--secondaryColor) ",
		},
	},
	"& .MuiBottomNavigationAction-label": {
		fontSize: 20,
		fontWeight: "bold",
	},
	"& .MuiBottomNavigationAction-root:hover": {
		color: "var(--primaryColor)",
		textShadow: "0 0 5px var(--primaryColor)",
		"& .MuiSvgIcon-root": {
			color: "var(--primaryColor)",
		},
	},
}));

export const SimpleNavigation = () => {
	const {
		value,
		setValue,
		drawerIsOpen,
		setDrawerIsOpen,
		theme,
		toggleTheme,
		isScreenSmall,
		isSticky,
		handleNavigate,
	} = useNavigationScroll();

	return (
		<Box
			sx={{
				position: isSticky ? "fixed" : "absolute",
				zIndex: 20,
				boxShadow: "-7px 33px 99px -2px rgba(145,140,145,1)",
				height: isSticky ? "10vh" : "15vh",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
				padding: "0 2rem",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: isSticky
						? "linear-gradient(90deg, rgba(245,255,247,1) 5%, rgba(237,240,221,1) 78%, rgba(238,214,207,1) 100%)"
						: "none",
					backgroundColor: isSticky ? "transparent" : "rgba(0, 0, 0, 0.5)",
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
				<IconButton
					sx={{
						ml: 1,
						position: "absolute",
						top: 0,
						right: -15,
						color: "var(--primaryColor)",
					}}
					onClick={toggleTheme}
				>
					{theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
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
						sx={{ color: "var(--primaryColor)" }}
						label="MENU"
						icon={<MenuBookIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "var(--primaryColor)" }}
						label="DOSTAWA"
						icon={<DeliveryDiningIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "var(--primaryColor)" }}
						label="LOKALIZACJA"
						icon={<LocationOnIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{ color: "var(--primaryColor)" }}
						label="KONTAKT"
						icon={<CallIcon fontSize="large" />}
					/>
					<CallBox phoneNumber={phoneNumber} />
				</CustomBottomNavigation>
			)}
		</Box>
	);
};
