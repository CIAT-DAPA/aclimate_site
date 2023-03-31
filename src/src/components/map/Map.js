import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Map.css";
import { useTranslation } from "react-i18next";
import markerImg from "../../assets/images/marker.png";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const URL_CSV_COUNTRIES =
  "https://raw.githubusercontent.com/CIAT-DAPA/aclimate_site/main/data/countries.csv";

const customIcon = new Icon({
  iconUrl: markerImg,
  iconSize: [48, 60],
  iconAnchor: [24, 60],
});

function Map() {
  const [t, i18n] = useTranslation("global");
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
      maxBounds={[
        [79.36, -157.89],
        [-38.67, 165.44],
      ]}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countries.map((country, index) => (
        <Marker
          key={index}
          position={[country.Latitud, country.Longitud]}
          icon={customIcon}
        >
          <Popup className="">
            <a
              className="text-dark text-decoration-none fs-6"
              href={country.Link}
              target="_blank"
              rel="noreferrer"
            >
              {country.Pais}
              <Button variant="primary" className="btn-sm ms-2 rounded-circle"><FontAwesomeIcon icon={faArrowRight} className="icon-popup" /></Button>
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
