import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Cta } from "../cta/Cta";
import { SimpleNavigation } from "../navigation/Navigation";
import { Footer } from "../footer/Footer";
import { useScrollToSection } from "../../hooks/useScrollToSection";

export const AppLayout = () => {
	useScrollToSection();
	return (
		<Grid container direction="column">
			<Grid
				container
				sx={{
					height: "50vh",
					minWidth: 350,
					background: "url(/pizza70.jpg)",
					backgroundAttachment: "fixed",
					backgroundSize: "cover",
				}}
			>
				<SimpleNavigation />
				<Cta />
			</Grid>
			<Grid>
				<Container
					sx={{
						minHeight: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						// mt: "15vh",
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
