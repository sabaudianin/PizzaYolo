import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export const Logo = () => {
	return (
		<Link href="/">
			<Box
				component="img"
				src="/logo.jpg"
				sx={{
					width: { xs: "60px", sm: "80px", md: "100px" },
					height: "auto",
					borderRadius: "50%",
					marginRight: "1rem",
				}}
			></Box>
		</Link>
	);
};
