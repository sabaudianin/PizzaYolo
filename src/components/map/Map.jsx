import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { mapPosition } from "../../constants";

export const Map = () => {
	return (
		<MapContainer
			center={mapPosition}
			zoom={19}
			style={{ height: "250px", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={mapPosition}>
				<Popup>
					Pizzeria YOLO <br /> Najlepsza pizza w Warszawie!
				</Popup>
			</Marker>
		</MapContainer>
	);
};
