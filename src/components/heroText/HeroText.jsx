import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export const HeroText = () => {
	const [isVisible, setisVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setisVisible(true);
		}, 1000);
		return () => clearTimeout(timer);
	});

	return (
		<Box
			sx={{
				position: "relative",
				display: "inline-block",
				m: 5,
				textAlign: "center",
				borderTop: "2px solid green",
				paddingY: "20px",
				borderBottom: "2px solid red",
			}}
		>
			<DeliveryDiningIcon
				sx={{
					position: "absolute",
					top: "-30px",
					left: 0,
					animation: "moveIcon 8s infinite ease-in-out",
				}}
			/>
			<Typography
				variant="h4"
				sx={{
					fontFamily: "Roboto Condensed",
					fontWeight: "bold",
					opacity: isVisible ? 1 : 0,
					transition: "opacity 2s ease-in-out",
				}}
			>
				Odwiedź nas i przekonaj się, że nie ma nic lepszego niż prawdziwa włoska
				pizza w wersji foodtruckowej
			</Typography>
		</Box>
	);
};
