import React from "react";
import { Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
    const markers = "d";

  return (
    <MapContainer
      center={[4.570868, -74.297333]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[4.570868, -74.297333]}>
        <Popup>
          Colombia <br /> <Button>Dirigete al sitio</Button>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
