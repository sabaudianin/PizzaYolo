import { Box, Typography, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

export const FacebookLink = () => {
	return (
		<Box>
			<Link href="https://www.facebook.com/5stradapizza">
				<FacebookIcon sx={{ fontSize: 52 }}></FacebookIcon>
			</Link>
		</Box>
	);
};
