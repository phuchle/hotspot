import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Sidebar = props => {
  return (
    <div className="sidebar" style={props.style}>
      <h3>{props.destination} in {props.location}</h3>
      <ListGroup>
        {props.hotspots.map(hotspot => {
          const venue = hotspot.venue;
          const url = `https://www.google.com/maps?saddr=My+Location&daddr=${venue.location.address} ${venue.location.city}, ${venue.location.state} ${venue.location.postalCode}`;

          return (
            <ListGroupItem
              key={venue.id}
            >
              <strong
                className="hotspot-list-item"
                onMouseDown={() => props.setHotspot(venue)}
              >
                {hotspot.venue.name}
              </strong>
              <p style={{ color: '#088f00'}}>Rating: {venue.rating}</p>
              <p>{hotspot.tips && hotspot.tips[0].text}</p>
              <p>Directions:</p>
              <a href={url}>
                <div>
                  <p style={{ margin: 0 }}>
                    {venue.location.address}
                  </p>
                  <p style={{ margin: 0 }}>
                    {venue.location.city}, {venue.location.state}
                  </p>
                  <p style={{ margin: 0 }}>
                    {venue.location.postalCode}
                  </p>
                </div>
              </a>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

Sidebar.propTypes = {
  hotspots: PropTypes.array.isRequired,
  destination: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Sidebar;
