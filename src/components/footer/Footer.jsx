import { Box, Typography, Container } from "@mui/material";
import { FacebookLink } from "../facebookLink/FacebookLink";
import HomeIcon from "@mui/icons-material/Home";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const Footer = () => {
	return (
		<Container
			id="contact"
			sx={{
				display: "flex",
				flexDirection: {
					xs: "column",
					sm: "row",
				},
				justifyContent: "space-around",
				alignItems: "center",
				flexWrap: "wrap",
			}}
		>
			<Box sx={{ fontSize: 32, width: "100%", my: 2 }}>
				<Typography variant="h4" sx={{ fontFamily: "Fantasy" }}>
					Polub Nas
				</Typography>
				<FacebookLink />
			</Box>
			<Box
				sx={{
					my: 2,
					// background: "rgba(245, 245, 220,0.3)",
					width: {
						xs: "60%",
						sm: "30%",
					},
					boxShadow: " 0 0 10px rgba(100, 100, 100, 0.5) ",
					p: 5,
					borderBottom: "2px solid var(--secondaryColor)",
					borderTop: "2px solid var(--primaryColor)",
					borderRadius: "5%",
				}}
			>
				<Typography>
					<QueryBuilderIcon />
					<br />
					<b>JESTEŚMY OTWARCI:</b>
				</Typography>
				<Typography>
					Wtorek-Sobota 13:00 - 21:00
					<br />
					Niedziela 13:00 - 20:00
					<br />
					Poniedziałki Nieczynne
				</Typography>
			</Box>
			<Box
				sx={{
					my: 2,
					boxShadow: " 0 0 10px rgba(100, 100, 100, 0.5) ",
					p: 5,
					borderRadius: "5%",
					borderLeft: "2px solid var(--primaryColor)",
					borderRight: "2px solid var(--secondaryColor)",
					width: {
						xs: "60%",
						sm: "30%",
					},
				}}
			>
				<Typography>
					<DeliveryDiningIcon />
					<br />
					<b>DOSTAWA:</b>
				</Typography>
				<Typography>
					<LocalPhoneIcon
						sx={{ fontSize: "medium", transform: "translateY(15%)" }}
					/>
					Zadzwoń :
					<br />
					tel. +48 798 625 767
				</Typography>
			</Box>
			<Box
				sx={{
					my: 2,
					width: {
						xs: "60%",
						sm: "30%",
					},
					boxShadow: " 0 0 10px rgba(100, 100, 100, 0.5) ",
					p: 5,

					borderRadius: "5%",
					borderBottom: "2px solid var(--primaryColor)",
					borderTop: "2px solid var(--secondaryColor)",
				}}
			>
				<Typography>
					<HomeIcon />
					<br />
					<b>ADRES:</b>
				</Typography>
				<Typography>
					Rzeżbiarska 63,
					<br />
					04-633 Warszawa,
					<br />
					Polska
				</Typography>
			</Box>
			<Box
				sx={{
					width: "100%",
					mt: 6,
					background: "rgba(100, 100, 100, 0.2)",
					boxShadow: " 0 -5px 50px rgba(100, 100, 100, 0.7) ",
				}}
			>
				<Typography>boobec@vp.pl - Design,Develop,Done</Typography>
			</Box>
		</Container>
	);
};
