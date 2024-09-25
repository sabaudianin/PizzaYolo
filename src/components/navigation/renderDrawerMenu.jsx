import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CallIcon from "@mui/icons-material/Call";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material";

export const RenderDrawerMenu = ({
	handleNavigate,
	drawerIsOpen,
	setDrawerIsOpen,
}) => {
	const StyledListItem = styled(ListItem)(() => ({
		"&:hover": {
			color: "red",
		},
	}));
	return (
		<Drawer
			anchor="right"
			open={drawerIsOpen}
			onClose={() => setDrawerIsOpen(false)}
		>
			<List
				sx={{
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					pt: "20px",
				}}
			>
				<StyledListItem
					onClick={() => {
						handleNavigate(0);
						setDrawerIsOpen(false);
					}}
					sx={{
						"&:hover": {
							color: "red",
						},
					}}
				>
					<ListItemIcon>
						<MenuBookIcon />
					</ListItemIcon>
					<ListItemText
						primary="MENU"
						primaryTypographyProps={{ fontSize: "24px" }}
					/>
				</StyledListItem>
				<StyledListItem
					onClick={() => {
						handleNavigate(1);
						setDrawerIsOpen(false);
					}}
				>
					<ListItemIcon>
						<DeliveryDiningIcon />
					</ListItemIcon>
					<ListItemText
						primary="DOSTAWA"
						primaryTypographyProps={{ fontSize: "24px" }}
					/>
				</StyledListItem>
				<StyledListItem
					onClick={() => {
						handleNavigate(2);
						setDrawerIsOpen(false);
					}}
				>
					<ListItemIcon>
						<LocationOnIcon />
					</ListItemIcon>
					<ListItemText
						primary="PROMOCJE"
						primaryTypographyProps={{ fontSize: "24px" }}
					/>
				</StyledListItem>
				<StyledListItem
					onClick={() => {
						handleNavigate(3);
						setDrawerIsOpen(false);
					}}
				>
					<ListItemIcon>
						<CallIcon />
					</ListItemIcon>
					<ListItemText
						primary="KONTAKT"
						primaryTypographyProps={{ fontSize: "24px" }}
					/>
				</StyledListItem>
			</List>
		</Drawer>
	);
};
