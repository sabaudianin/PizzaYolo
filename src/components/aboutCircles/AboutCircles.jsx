import { Container, Box, Typography, styled } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";

export const AboutCircles = () => {
	const StyledBox = styled(Box)(() => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		borderRadius: "50%",
		padding: "30px",
		textAlign: "center",
		borderBottom: "2px solid red",
		borderTop: "2px solid green",
		margin: 10,
		textShadow: " 1px 1px 1px #de2d0e ",
	}));

	const StyledTypography = styled(Typography)(() => ({
		fontFamily: "Lobster",
		fontSize: "24px",
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
				my: 10,
			}}
		>
			<StyledBox>
				<EmojiFlagsIcon sx={{ color: "#de2d0e" }} />
				<StyledTypography>Włoska Receptura</StyledTypography>
			</StyledBox>
			<StyledBox sx={{ textShadow: " 1px 1px 1px green " }}>
				<SpaIcon sx={{ color: "green" }} />

				<StyledTypography>Świeże składniki</StyledTypography>
			</StyledBox>
			<StyledBox>
				<FavoriteIcon sx={{ color: "#de2d0e" }} />
				<StyledTypography>Tworzone z pasją</StyledTypography>
			</StyledBox>
		</Container>
	);
};
