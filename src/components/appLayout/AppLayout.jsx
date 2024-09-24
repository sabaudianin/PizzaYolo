import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { Navigation } from "../navigation/Navigation";
import { Footer } from "../footer/Footer";

export const AppLayout = () => {
	return (
		<Grid
			container
			direction="column"
			sx={{
				// minHeight: "100vh",
				minWidth: 400,
			}}
		>
			<Grid container>
				<Navigation />
			</Grid>
			<Grid>
				<Container
					sx={{
						minHeight: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
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
				<Footer />
			</Grid>
		</Grid>
	);
};
