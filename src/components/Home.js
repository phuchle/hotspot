import React from 'react';
import LocationInput from './LocationInput';
import { Grid, Row, Col } from 'react-bootstrap';
import { findHotspots } from '../utils/api';

const Home = props => {
  const handleLocationSubmit = locationObj => {
    let { destination, location} = locationObj;
    const hotspots = findHotspots(destination, location);

    props.history.push({
      pathname: 'map',
      location: {
        state: { ...hotspots }
      }
    });
  };
  return (
    <Grid>
      <Row>
        <Col
          sm={8}
          smOffset={2}
          md={6}
          mdOffset={3}
          lg={6}
          lgOffset={3}
        >
          <h1 style={{color: 'red'}}>
            HotSpot
          </h1>
          <LocationInput
            handleSubmit={handleLocationSubmit}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default Home;
