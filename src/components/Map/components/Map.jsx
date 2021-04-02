import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapWrapper } from "./Map.styles";

import L from "leaflet";

//marker icon

const iconPerson = new L.Icon({
  iconUrl: require("../../../images/icon-location.svg").default,
  iconRetinaUrl: require("../../../images/icon-location.svg").default,
  iconSize: new L.Point(60, 75),
});

const Map = () => {
  return (
    <MapWrapper
      zoomControl={false}
      center={[55.44, 44.3]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker icon={iconPerson} position={[55.44, 44.3]}>
        <Popup>Welcome</Popup>
      </Marker>
    </MapWrapper>
  );
};

export default Map;
