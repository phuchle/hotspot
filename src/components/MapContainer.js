import React from 'react';
import { withGoogleMap, GoogleMap, Circle } from 'react-google-maps';
import PropTypes from 'prop-types';

const MapWrapper = withGoogleMap(props => {
  const sanJoseCoords = { lat: 37.3382, lng: -121.8863 };
  const center = props.defaultCenter || sanJoseCoords;
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={center}
    >
      {props.location.state.hotspots.map(hotspot => {
        console.log(hotspot.venue.stats.checkinsCount);
        return (<Circle
          key={hotspot.venue.id}
          center={ {lat: hotspot.venue.location.lat, lng: hotspot.venue.location.lng} }
          radius={hotspot.venue.stats.checkinsCount / 100}
          options={{
            fillColor: 'red',
            fillOpacity: .5,
            strokeColor: '#333',
            strokeWeight: .5
          }}
        />);
      }
      )}
    </GoogleMap>
  );
});

const MapContainer = props => {
  return (
    <MapWrapper
      defaultCenter={props.location.state.mapCenter}
      location={props.location}
      containerElement={<div className="map-container" />}
      mapElement={<div className="map-container" />}
    />
  );
};

MapContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MapContainer;
