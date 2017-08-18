import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const MapWrapper = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 37.3382, lng: -121.8863 }}
  />
));

const MapContainer = props => {
  return (
    <MapWrapper
      containerElement={<div className="map-container" />}
      mapElement={<div className="map-container" />}
    />
  );
};

export default MapContainer;
