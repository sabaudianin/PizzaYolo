import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { SimpleNavigation } from "../navigation/Navigation";
import { Footer } from "../footer/Footer";

export const AppLayout = () => {
	return (
		<Grid container direction="column">
			<Grid
				container
				sx={{
					height: "50vh",
					minWidth: 400,
					background: "url(/pizza70.jpg)",
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
				}}
			>
				<SimpleNavigation />
			</Grid>
			<Grid>
				<Container
					sx={{
						minHeight: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						mt: "15vh",
					}}
				>
					<Outlet />
				</Container>
			</Grid>
			<Grid
				container
				sx={{
					height: "20vh",
					textAlign: "center",
				}}
			>
				<Footer id="contact" />
			</Grid>
		</Grid>
	);
};
