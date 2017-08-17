import React from 'react';
import LocationInput from './LocationInput';
import { Grid, Row, Col } from 'react-bootstrap';
import { searchFoursquare } from '../utils/api';

const handleLocationSubmit = locationObj => {
  const { destination, location} = locationObj;
  searchFoursquare(destination, location);
};

const Home = props => {
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
