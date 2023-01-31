import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const URL_CSV_COUNTRIES =
  "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/countries.csv";

function Map() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    Papa.parse(URL_CSV_COUNTRIES, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setCountries(results.data);
      },
    });
  }, []);

  return (
    <MapContainer
      center={[4.570868, -74.297333]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country, index) => (
        <Marker key={index} position={[country.Latitud, country.Longitud]}>
          <Popup>
            {country.Pais} <br /> <Button><a href={country.Link}>Dirigete al sitio</a></Button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
