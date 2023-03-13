import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import { useTranslation } from 'react-i18next';

const URL_CSV_COUNTRIES =
  "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/countries.csv";

function Map() {
  const [t, i18n] = useTranslation("global")
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
      zoomControl={false}
      maxBounds={[[79.36, -157.89], [-38.67, 165.44]]}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country, index) => (
        <Marker key={index} position={[country.Latitud, country.Longitud]}>
          <Popup>
            {country.Pais} <br />
            <a className="btn btn-primary btn-sm text-light" href={country.Link} target="_blank" rel="noreferrer" role="button">{t("map.to-site")}</a>
          </Popup>
        </Marker>
      ))
      }
    </MapContainer >
  );
}

export default Map;
