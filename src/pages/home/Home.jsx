import { Container, Box } from "@mui/material";
import { Localization } from "../localization/Localization";
import { Menu } from "../menu/Menu";
import { CarouselGallery } from "../../components/carousel/CarouselGallery";
import { AboutBoxes } from "../../components/aboutBoxes/AboutBoxes";
import { HeroText } from "../../components/heroText/HeroText";
import { SpinerPizza } from "../../components/spinerPizza/SpinerPizza";
import { AboutCircles } from "../../components/aboutCircles/AboutCircles";

export const Home = () => {
	return (
		<Container maxWidth="lg">
			<HeroText />
			<CarouselGallery />
			<AboutBoxes />
			<SpinerPizza />
			<Box id="menu">
				<Menu />
			</Box>
			<AboutCircles />
			<Box>
				<Localization />
			</Box>
		</Container>
	);
};
