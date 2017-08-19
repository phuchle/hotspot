import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import PropTypes from 'prop-types';

const MapWrapper = withGoogleMap(props => {
  const sanJoseCoords = { lat: 37.3382, lng: -121.8863 };
  const center = props.defaultCenter || sanJoseCoords;
  return (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={center}
  /> );
});

const MapContainer = props => {
  return (
    <MapWrapper
      defaultCenter={props.location.state.mapCenter}
      containerElement={<div className="map-container" />}
      mapElement={<div className="map-container" />}
    />
  );
};

MapContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MapContainer;
