"use client";

import { MapContainer, TileLayer, LayersControl, Marker, Popup, LayerGroup, Circle, FeatureGroup, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
 const center = [8.1895, 77.4348];
  const rectangle = [
   [8.1895, 77.4348],
  [8.1895, 77.4348],
  ];

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="h-[500px] w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position="topright">
        <LayersControl.Overlay name="Marker with popup">
          <Marker position={center}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Layer group with circles">
          <LayerGroup>
            <Circle center={center} pathOptions={{ fillColor: "blue" }} radius={200} />
            <Circle center={center} pathOptions={{ fillColor: "red" }} radius={100} stroke={false} />
            <LayerGroup>
              <Circle center={[8.1895, 77.4348]} pathOptions={{ color: "green", fillColor: "green" }} radius={100} />
            </LayerGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Feature group">
          <FeatureGroup pathOptions={{ color: "purple" }}>
            <Popup>Popup in FeatureGroup</Popup>
            <Circle center={[8.1895, 77.4348]} radius={200} />
            <Rectangle bounds={rectangle} />
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
};

export default LeafletMap;
