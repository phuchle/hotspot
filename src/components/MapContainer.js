import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Circle } from 'react-google-maps';
import { Grid, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';

const MapWrapper = withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={14}
      center={props.defaultCenter}
    >
      {props.location.state.hotspots.map(hotspot => {
        let options;
        if (hotspot.venue.id === props.activeHotspot) {
          options = {
            fillColor: 'red',
            fillOpacity: .8,
            strokeColor: 'red',
            strokeWeight: 2
          };
        } else {
          options = {
            fillColor: 'blue',
            fillOpacity: .3,
            strokeColor: '#333',
            strokeWeight: .5
          };
        }

        return (
          <Circle
            key={hotspot.venue.id}
            center={ {lat: hotspot.venue.location.lat, lng: hotspot.venue.location.lng} }
            radius={hotspot.venue.stats.checkinsCount / 100}
            options={options}
          />
        );
      })}
    </GoogleMap>
  );
});

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeHotspot: null,
      mapCenter: this.props.location.state.mapCenter,
    };

    this.setHotspot = this.setHotspot.bind(this);
  }
  setHotspot(venue) {
    this.setState({
      activeHotspot: venue.id,
      mapCenter: { lat: venue.location.lat, lng: venue.location.lng }
    });
  }
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={8}>
            <MapWrapper
              activeHotspot={this.state.activeHotspot}
              defaultCenter={this.state.mapCenter}
              location={this.props.location}
              containerElement={<div className="map-container" />}
              mapElement={<div className="map-container" />}
            />
          </Col>
          <Col xs={12} sm={4}>
            <Sidebar
              setHotspot={this.setHotspot}
              hotspots={this.props.location.state.hotspots}
              destination={this.props.location.state.destination}
              location={this.props.location.state.location}
              style={{
                overflowY: 'scroll'
              }}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
};

MapContainer.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MapContainer;
