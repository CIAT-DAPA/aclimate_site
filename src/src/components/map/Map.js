import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

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
      center={[14.88, -35, 76]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "100%" }}
      className="hidden"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country, index) => (
        <Marker key={index} position={[country.Latitud, country.Longitud]}>
          <Popup>
            {country.Pais} <br /><a class="btn btn-primary text-light" href={country.Link} target="_blank" rel="noreferrer" role="button">Dirigete al sitio</a>
          </Popup>
        </Marker>
      ))
      }
    </MapContainer >
  );
}

export default Map;
