import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapWrapper } from "./Map.styles";
import Loader from "react-loader-spinner";
import { LoaderContainer } from "../../../themes/GlobalStyles";
import L from "leaflet";
import { useTheme } from "styled-components";

//marker icon

const iconPerson = new L.Icon({
  iconUrl: require("../../../images/icon-location.svg").default,
  iconRetinaUrl: require("../../../images/icon-location.svg").default,
  iconSize: new L.Point(60, 75),
});

const Map = ({ loading, ipData }) => {
  //for change the color of the loader
  const theme = useTheme();

  return (
    <>
      {loading && (
        <LoaderContainer style={{ height: "100vh" }}>
          <Loader
            type="TailSpin"
            color={theme.veryDarkGray}
            height={80}
            width={80}
          />
        </LoaderContainer>
      )}
      {ipData && (
        <MapWrapper
          zoomControl={false}
          center={[ipData.location.lat, ipData.location.lng]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            icon={iconPerson}
            position={[ipData.location.lat, ipData.location.lng]}
          >
            <Popup>Current Location : {ipData.location.region}</Popup>
          </Marker>
        </MapWrapper>
      )}
    </>
  );
};

export default Map;
