import { Container, Box, Typography, styled } from "@mui/material";

export const AboutBoxes = () => {
	const StyledBox = styled(Box)(() => ({
		// background:
		// 	"linear-gradient(90deg, rgba(3,115,34,1) 5%,  rgba(153,47,21,1) 95%)",

		boxShadow:
			" 0px 0px 49px 23px rgba(145,140,145,1) inset, 0px 0px 9px 5px rgba(145,140,145,1)",
		width: "100%",
		margin: 20,
		background: "rgba(100, 100, 100, 0.2)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "10%",
		padding: "20px",
		textAlign: "center",
	}));

	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: {
					xs: "column",
					sm: "row",
				},
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<StyledBox>
				<Typography
					variant="h4"
					sx={{
						mb: 2,
						textAlign: "center",
						fontFamily: "Fantasy",
						fontSize: 30,
					}}
				>
					Zadzwoń do nas
					<br /> 798 625 767
				</Typography>
			</StyledBox>
			<StyledBox>
				<Typography
					variant="h4"
					sx={{
						m: 2,
						textAlign: "center",
						fontFamily: "Fantasy",
						fontSize: 30,
					}}
				>
					Adres:
					<br />
					<span style={{ fontSize: 20 }}>
						Rzeźbiarska 63, Warszawa, Polska, 04-620
					</span>
				</Typography>
			</StyledBox>
			<StyledBox>
				<Typography
					variant="h4"
					sx={{
						mb: 2,
						textAlign: "center",
						fontFamily: "Fantasy",
						fontSize: 30,
					}}
				>
					Godziny otwarcia <br /> 13:00 - 21:00
				</Typography>
			</StyledBox>
		</Container>
	);
};
