"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { CSSProperties, memo } from "react";

type MapComponentProps = {
  center: google.maps.LatLngLiteral;
  containerStyle: CSSProperties;
};

function MapComponent({ center, containerStyle }: MapComponentProps) {
  return (
    <LoadScript googleMapsApiKey={""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default memo(MapComponent, (prevProps, nextProps) => {
  return (
    prevProps.center.lat === nextProps.center.lat &&
    prevProps.center.lng === nextProps.center.lng &&
    prevProps.containerStyle.width === nextProps.containerStyle.width &&
    prevProps.containerStyle.height === nextProps.containerStyle.height
  );
});
