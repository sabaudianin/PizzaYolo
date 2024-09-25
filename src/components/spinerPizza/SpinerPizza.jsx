import { Box } from "@mui/material";

export const SpinerPizza = () => {
	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				justifyContent: "center",
				position: "relative",
				"::before": {
					content: '" "',
					width: "30%",
					border: "1px solid var(--primaryColor)",
					position: "absolute",
					top: "50%",
					left: 0,
				},
				"::after": {
					content: '" "',
					width: "30%",
					border: "1px solid var(--secondaryColor)",
					position: "absolute",
					top: "50%",
					right: 0,
				},
			}}
		>
			<Box
				sx={{
					borderRadius: "50%",
					background: "url(/roundPizza.png)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					padding: 8,
					animation: "spining 10s infinite linear",
					mt: 2,
				}}
			></Box>
		</Box>
	);
};
