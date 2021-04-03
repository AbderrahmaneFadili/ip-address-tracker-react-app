import React, { useEffect, useState } from "react";
import {
  IpGeodataContainer,
  IpGeodataInfo,
  IpGeodataInfoTitle,
  IpGeodataValue,
} from "./IpGeoData.styles";
import Loader from "react-loader-spinner";
import { LoaderContainer } from "../../../themes/GlobalStyles";
import { useTheme } from "styled-components";

const IpGeoData = ({ loading, ipData, error, fetchIpInfo }) => {
  useEffect(() => {
    fetchIpInfo("");
  }, []);

  const theme = useTheme();
  return (
    <IpGeodataContainer>
      <>
        {loading && (
          <LoaderContainer>
            <Loader
              type="TailSpin"
              color={theme.veryDarkGray}
              height={50}
              width={50}
            />
          </LoaderContainer>
        )}
        {ipData && (
          <>
            <IpGeodataInfo>
              <IpGeodataInfoTitle>IP Address</IpGeodataInfoTitle>
              <IpGeodataValue>{ipData.ip}</IpGeodataValue>
            </IpGeodataInfo>

            <IpGeodataInfo>
              <IpGeodataInfoTitle>Location</IpGeodataInfoTitle>
              <IpGeodataValue>{ipData.location.region}</IpGeodataValue>
            </IpGeodataInfo>

            <IpGeodataInfo>
              <IpGeodataInfoTitle>Timezone</IpGeodataInfoTitle>
              <IpGeodataValue>{ipData.location.timezone}</IpGeodataValue>
            </IpGeodataInfo>

            <IpGeodataInfo>
              <IpGeodataInfoTitle>ISP</IpGeodataInfoTitle>
              <IpGeodataValue>{ipData.isp}</IpGeodataValue>
            </IpGeodataInfo>
          </>
        )}
      </>
    </IpGeodataContainer>
  );
};

export default IpGeoData;
