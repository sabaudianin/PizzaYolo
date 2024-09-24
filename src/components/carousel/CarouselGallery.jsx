import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box } from "@mui/material";

export const CarouselGallery = () => {
	// Tablica obrazów do slideshow
	const images = [
		"/lightboxGallery/piec.jpg",
		"/lightboxGallery/pizzaBlur.jpg",
		"/lightboxGallery/pizzaManPiec.jpg",
		"/lightboxGallery/pizzaNight.jpg",
	];

	return (
		<Carousel
			interval={3000}
			stopAutoPlayOnHover={true}
			indicators={true}
			navButtonsAlwaysVisible={true}
		>
			{images.map((image, index) => (
				<Box
					key={index}
					component="img"
					src={image}
					alt={`Slideshow ${index + 1}`}
					sx={{
						height: 350,
						width: "100%",
						objectFit: "cover",
						borderRadius: "5%",
					}}
				/>
			))}
		</Carousel>
	);
};
