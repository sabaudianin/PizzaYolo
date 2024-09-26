import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo } from "../Logo/Logo";
import { RenderDrawerMenu } from "./renderDrawerMenu";
import { CallBox } from "../../components/callBox/CallBox";
import { phoneNumber } from "../../constants";
import { useWindowScroll } from "../../hooks/useWindowScroll";
import { useScrollToSection } from "../../hooks/useScrollToSection";

export const CustomBottomNavigation = styled(BottomNavigation)(() => ({
	height: "10vh",
	position: "relative",

	"& .Mui-selected": {
		color: "tomato",
		"& .MuiSvgIcon-root": {
			color: "#8b0813 ",
		},
	},
	"& .MuiBottomNavigationAction-label": {
		fontSize: 20,
		fontWeight: "bold",
	},
	"& .MuiBottomNavigationAction-root:hover": {
		color: "var(--primaryColor)",
		textShadow: "0 0 5px var(--primaryColor)",
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
	} = useWindowScroll();

	const { handleNavigate } = useScrollToSection();

	return (
		<Box
			sx={{
				width: "100%",
				height: isSticky ? "10vh" : "15vh",
				position: isSticky ? "fixed" : "absolute",
				top: 0,
				left: 0,
				zIndex: 20,
				boxShadow: "-7px 33px 99px -2px rgba(145,140,145,1)",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0 2rem",
				transition: "2s",
			}}
		>
			<IconButton
				sx={{
					position: "absolute",
					top: 5,
					left: 5,
					zIndex: 25,
					color: "#c6babb",
				}}
				onClick={toggleTheme}
			>
				{theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
			</IconButton>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: isSticky
						? "  linear-gradient(180deg, rgba(15,12,12,0.9) 0%, rgba(74,71,71,0.9417892156862745) 35%, rgba(0,0,0,0.9) 100%)"
						: "none",
					backgroundColor: isSticky ? "transparent" : "rgba(0, 0, 0, 0.6)",
					zIndex: 1,
				}}
			/>
			<Box
				sx={{
					position: "relative",
					zIndex: 25,
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
						<MenuIcon sx={{ fontSize: 50, color: "var(--primaryColor)" }} />
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
						sx={{
							color: "var(--primaryColor)",
							textShadow: "var(--txtShadow)",
						}}
						label="Menu"
						icon={<MenuBookIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						component="a"
						href="https://www.facebook.com/5stradapizza"
						target="_blank"
						rel="noopener noreferrer"
						sx={{
							color: "var(--secondaryColor)",
							textShadow: "var(--txtShadow)",
						}}
						label="Promocje"
						icon={<FacebookIcon fontSize="large" sx={{ color: "#31bfd2" }} />}
					/>
					<BottomNavigationAction
						sx={{
							color: "var(--primaryColor)",
							textShadow: "var(--txtShadow)",
						}}
						label="Lokalizacja"
						icon={<LocationOnIcon fontSize="large" />}
					/>
					<BottomNavigationAction
						sx={{
							color: "var(--secondaryColor)",
							textShadow: "var(--txtShadow)",
						}}
						label="Kontakt"
						icon={<CallIcon fontSize="large" />}
					/>
					<CallBox phoneNumber={phoneNumber} />
				</CustomBottomNavigation>
			)}
		</Box>
	);
};
