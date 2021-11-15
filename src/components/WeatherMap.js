import React, { useEffect, useRef } from "react";
import L from "leaflet";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Map() {
  const mapRef = useRef(null);
  const tileRef = useRef(null);

  tileRef.current = L.tileLayer(
    `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  const mapStyles = { overflow: "hidden", width: "100%", height: "500px" };

  const mapParams = {
    center: [37.0902, -95.7129],
    zoom: 3,
    zoomControl: false,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    closePopupOnClick: false,
    layers: [tileRef.current], // Change MAP_TILE to the tileRef here};
  };

  // Map creation:
  useEffect(() => {
    mapRef.current = L.map("map", mapParams);
  }, []);

  // Add controls:
  useEffect(() => {
    // Pass a baseLayers object to the layer control:
    L.control
      .layers({
        OpenStreetMap: tileRef.current,
      })
      .addTo(mapRef.current); // Add the control to our map instance

    // Create the zoom control:
    L.control
      .zoom({
        position: "topright",
      })
      .addTo(mapRef.current); // Add the control to our map instance
  }, []);

  useEffect(() => {
    // Use mapRef.current to add map event listeners to
    // our map instance:
    mapRef.current.on("zoomstart", () => {
      console.log("ZOOM STARTED");
    });
  }, []);

  return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            <Box id="map" style={mapStyles} />
        </Container>
    </React.Fragment>
  );
};
