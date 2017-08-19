import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Sidebar = props => {
  console.log(props);
  return (
    <div className="sidebar" style={props.style}>
      <h3>{props.destination} in {props.location}</h3>
      <ListGroup>
        {props.hotspots.map(hotspot => {
          const venue = hotspot.venue;
          const url = `https://www.google.com/maps?saddr=My+Location&daddr=${venue.location.address} ${venue.location.city}, ${venue.location.state} ${venue.location.postalCode}`;

          console.log(hotspot);
          return (
            <ListGroupItem>
              <strong>{hotspot.venue.name}</strong>
              <p>Rating: {venue.rating}</p>
              <a href={url}>
                <p>
                  Address:
                  <p style={{ margin: 0 }}>
                    {venue.location.address}
                  </p>
                  <p style={{ margin: 0 }}>
                    {venue.location.city}, {venue.location.state}
                  </p>
                  <p style={{ margin: 0 }}>
                    {venue.location.postalCode}
                  </p>
                  {venue.contact && venue.contact.formattedPhone && (<p>Phone Number: {venue.contact.formattedPhone}</p>)}
                </p>
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
