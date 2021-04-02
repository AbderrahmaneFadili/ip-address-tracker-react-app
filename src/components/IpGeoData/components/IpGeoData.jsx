import React from "react";
import {
  IpGeodataContainer,
  IpGeodataInfo,
  IpGeodataInfoTitle,
  IpGeodataValue,
} from "./IpGeoData.styles";

const IpGeoData = () => {
  return (
    <IpGeodataContainer>
      <IpGeodataInfo>
        <IpGeodataInfoTitle>IP Address</IpGeodataInfoTitle>
        <IpGeodataValue>333.333.333</IpGeodataValue>
      </IpGeodataInfo>

      <IpGeodataInfo>
        <IpGeodataInfoTitle>Location</IpGeodataInfoTitle>
        <IpGeodataValue>Morocco</IpGeodataValue>
      </IpGeodataInfo>

      <IpGeodataInfo>
        <IpGeodataInfoTitle>Timezone</IpGeodataInfoTitle>
        <IpGeodataValue>UTC-6:00</IpGeodataValue>
      </IpGeodataInfo>

      <IpGeodataInfo>
        <IpGeodataInfoTitle>ISP</IpGeodataInfoTitle>
        <IpGeodataValue>Orange</IpGeodataValue>
      </IpGeodataInfo>
    </IpGeodataContainer>
  );
};

export default IpGeoData;
