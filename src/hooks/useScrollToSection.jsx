import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";

export const useScrollToSection = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleNavigate = useCallback(
		(newValue) => {
			const targets = ["menu", "delivery", "localization", "contact"];
			navigate("/", { state: { target: targets[newValue] } });
		},
		[navigate]
	);

	//Scrolowanie z Navigacji
	useEffect(() => {
		const target = location.state?.target;
		if (target) {
			scroller.scrollTo(target, {
				duration: 1500,
				smooth: true,
			});
			navigate(location.pathname, { replace: true, state: {} });
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location, navigate]);

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
			navigate(location.pathname, { replace: true, state: {} });
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [location, navigate]);

	return { handleNavigate };
};
