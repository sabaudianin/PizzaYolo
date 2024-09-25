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
		borderBottom: "2px solid var(--primaryColor)",
		borderTop: "2px solid var(--secondaryColor)",
		margin: 10,
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
				<EmojiFlagsIcon sx={{ color: "var(--primaryColor)" }} />
				<StyledTypography>Włoska Receptura</StyledTypography>
			</StyledBox>
			<StyledBox>
				<SpaIcon sx={{ color: "var(--secondaryColor)" }} />

				<StyledTypography>Świeże składniki</StyledTypography>
			</StyledBox>
			<StyledBox>
				<FavoriteIcon sx={{ color: "var(--primaryColor)" }} />
				<StyledTypography>Tworzone z pasją</StyledTypography>
			</StyledBox>
		</Container>
	);
};
