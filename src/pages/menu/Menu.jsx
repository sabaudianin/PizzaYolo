import React from "react";
import { Box, Typography } from "@mui/material";

export const Menu = () => {
	return (
		<Box
			id="menu"
			sx={{
				px: 2,
				py: 5,
				my: 4,
				background: "lightGray",
				opacity: "85%",
				fontFamily: "Roboto",
				borderRadius: 1,
				boxShadow: " 0 0 10px rgba(100, 100, 100, 0.5) ",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					mb: 4,
					textAlign: "center",
					fontFamily: "Lobster",
					color: "tomato",
				}}
			>
				Pizza Rossa
			</Typography>

			<Typography variant="body1">
				<strong>1. MARGHERITA</strong> 🍃 31 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, oliwa
				czosnkowa, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>2. PICANTE</strong> 🌶️ 37 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, pikantne
				salami Spianata, oliwa czosnkowa, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>3. NAPOLI</strong> 39 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, salami
				Napoli, zielone oliwki, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>4. PEPERONCINO</strong> 🌶️🌶️ 40 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, pikantne
				salami Spianata, ostra papryczka Peperoncino, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>5. COTTO</strong> 39 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, szynka
				Prosciutto Cotto, Mascarpone, oliwa czosnkowa, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>6. PANCETTA</strong> 45 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, włoski
				boczek Pancetta, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>7. PARMA</strong> 49 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, szynka
				Prosciutto Crudo, pomidorki koktajlowe, rukola, oliwa czosnkowa, ser
				Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>8. BURRATA</strong> 🌶️ 42 PLN
				<br />
				polpa pomidorowa, świeża bazylia, pikantna kiełbasa Nduja, ser Burrata,
				oliwa czosnkowa, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>9. CALABRESE</strong> 🌶️ 46 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, pikantne
				salami Spianata, pikantna kiełbasa Nduja, marynowana czerwona cebula,
				ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>10. QUATTRO CARNI</strong> 42 PLN
				<br />
				polpa pomidorowa, mozzarella Fior di Latte, świeża bazylia, szynka
				Prosciutto Cotto, salami Napoli, pikantne salami Spianata, boczek
				Pancetta, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>11. FRESCA</strong> 🍃 49 PLN
				<br />
				polpa pomidorowa, świeża bazylia, karczochy, rukola, ser Burrata, krem
				balsamiczny, oliwa czosnkowa, ser Grana Padano
			</Typography>

			{/* Pizza Bianca */}
			<Typography
				variant="h4"
				sx={{ mt: 4, mb: 2, textAlign: "center", fontFamily: "Lobster" }}
			>
				Pizza Bianca
			</Typography>

			<Typography variant="body1">
				<strong>12. FORMAGGIO E PEPE</strong> 🍃 45 PLN
				<br />
				oliwa czosnkowa, pieprz czarny młotkowany, mozzarella Fior di Latte, ser
				gorgonzola, ser Pecorino Romano, orzechy włoskie, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>13. CAMPAGNOLA</strong> 45 PLN
				<br />
				Mascarpone, mozzarella Fior di Latte, pieprz czarny młotkowany, włoski
				boczek Pancetta, marynowana czerwona cebula, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>14. SPINACHI</strong> 🍃 43 PLN
				<br />
				suszone pomidory, świeży szpinak, mozzarella Fior di Latte, ser
				gorgonzola, oliwa czosnkowa, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>15. PESTO</strong> 45 PLN
				<br />
				mozzarella Fior di Latte, Mascarpone, suszone pomidory, świeża bazylia,
				szynka Prosciutto Cotto, pesto zielone, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>16. TARTUFO</strong> 49 PLN
				<br />
				krem truflowy, mozzarella Fior di Latte, Mascarpone, salami Napoli,
				pomidorki koktajlowe, ser Grana Padano
			</Typography>

			{/* Calzone */}
			<Typography
				variant="h4"
				sx={{ mt: 4, mb: 2, textAlign: "center", fontFamily: "Lobster" }}
			>
				Calzone
			</Typography>

			<Typography variant="body1">
				<strong>17. SALAMI</strong> 39 PLN
				<br />
				Mascarpone, mozzarella Fior di Latte, salami Napoli, polpa pomidorowa,
				świeża bazylia, oliwa czosnkowa, ser Grana Padano
			</Typography>

			<Typography variant="body1">
				<strong>18. PROSCIUTTO</strong> 🌶️ 41 PLN
				<br />
				Mascarpone, mozzarella Fior di Latte, szynka Prosciutto Cotto, pikantna
				kiełbasa Nduja, polpa pomidorowa, świeża bazylia
			</Typography>

			<Typography variant="body1">
				<strong>19. VERDE</strong> 🍃 38 PLN
				<br />
				Mascarpone, konfitowany czosnek, świeży szpinak, mozzarella Fior di
				Latte, ser gorgonzola, oliwa czosnkowa, ser Grana Padano
			</Typography>
		</Box>
	);
};
