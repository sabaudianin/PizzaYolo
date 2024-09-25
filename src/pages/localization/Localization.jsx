import { Box, Typography } from "@mui/material";
import { Map } from "../../components/map/Map";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Localization = () => {
	return (
		<Box
			id="localization"
			sx={{
				py: 5,
				boxShadow: " 0px 0px 49px 23px rgba(145,140,145,1)inset",
				borderRadius: 5,
			}}
		>
			<Typography
				variant="h4"
				sx={{
					textAlign: "center",
					fontFamily: "Fantasy",
					fontSize: 36,
					font: "bold",
				}}
			>
				Nasza Lokalizacja
			</Typography>
			<Typography variant="body1" sx={{ textAlign: "center", p: 2 }}>
				Znajdujemy się tutaj
				<ArrowDownwardIcon
					sx={{ transform: "translateY(25%)", color: "var(--primaryColor)" }}
				/>
			</Typography>
			<Map />
		</Box>
	);
};
