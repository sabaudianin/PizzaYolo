import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export const CallBox = ({ phoneNumber }) => {
	return (
		<Box sx={{ display: "flex", justifyContent: "center" }}>
			<Box
				component="a"
				href={`tel:${phoneNumber}`}
				sx={{
					position: "relative",
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					px: 2,
					m: "auto",
					height: "5vh",
					overflow: "hidden",
					fontWeight: "bold",
					transition: "all 1s ease-out",
					border: "2px solid #de2d0e",
					borderRadius: "10%",
					boxShadow: 5,
					cursor: "pointer",
					textDecoration: "none",
					background: "black",

					"&:hover": {
						animation: "pulsingBorder 1.5s infinite ease-in-out",
					},
					"&:hover .hoverIcon": {
						transform: "translateX(0)",
					},
					"&:hover .text": {
						transform: "translateX(110%)",
					},
				}}
			>
				<Box
					className="hoverIcon"
					sx={{
						position: "absolute",
						inset: 0,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
						height: "100%",
						color: "red",
						transition: "transform 0.3s ease",
						transform: "translateX(-100%)",
					}}
				>
					<PhoneIcon sx={{ width: 34, height: 34 }} />
				</Box>
				<Box
					className="text"
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "white",
						transition: "transform 0.3s ease",
					}}
				>
					<Typography sx={{ fontWeight: "bold", fontSize: 24 }}>
						Zamów Teraz
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
