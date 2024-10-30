import { Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

export const Cta = () => {
	return (
		<Box
			sx={{
				width: "100%",
				position: "absolute",
				top: "25vh",
				display: "inline-block",
				textAlign: "center",
				paddingY: "20px",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					fontFamily: "Roboto Condensed",
					fontWeight: "bold",
					fontSize: "2.5rem",
					color: "var(--primaryColor) ",
					textShadow: "var(--txtShadow)",
					transition: "opacity 2s ease-in-out",
				}}
			>
				Zadzwoń i zamów, my dowieziemy
				<br />
				<CallIcon fontSize="large" /> +48 798 625 767
			</Typography>
		</Box>
	);
};
