import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Container, Box, Typography } from "@mui/material";
import { Localization } from "../localization/Localization";
import { Menu } from "../menu/Menu";
import { CarouselGallery } from "../../components/carousel/CarouselGallery";
import { AboutBoxes } from "../../components/aboutBoxes/AboutBoxes";
import { HeroText } from "../../components/heroText/HeroText";
import { SpinerPizza } from "../../components/spinerPizza/SpinerPizza";
import { CallBox } from "../../components/callBox/CallBox";
import { phoneNumber } from "../../constants";
import { AboutCircles } from "../../components/aboutCircles/AboutCircles";

export const Home = () => {
	const location = useLocation();

	//Scrolowanie z Navigacji
	useEffect(() => {
		const target = location.state?.target;
		if (target) {
			scroller.scrollTo(target, {
				duration: 500,
				smooth: true,
				offset: -100,
			});
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location]);

	//Scrolowanie z Pathname url
	useEffect(() => {
		const pathname = location.pathname;
		let id = pathname.replace("/", "");
		if (id) {
			scroller.scrollTo(id, {
				duration: 500,
				delay: 0,
				smooth: "easeInOutQuart",
				offset: -100,
			});
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location]);

	return (
		<Container
			maxWidth="lg"
			// sx={{
			// 	background: "linear-gradient(to top ,red 80px, blue 80px)",
			// }}
		>
			<HeroText />

			<CarouselGallery />

			<AboutBoxes />
			<SpinerPizza />
			<Box id="menu">
				<Menu />
			</Box>
			<AboutCircles />
			<Box id="localization">
				<Localization />
			</Box>

			{/* <Contact /> */}
		</Container>
	);
};
