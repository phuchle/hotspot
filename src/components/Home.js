import React, { Component } from 'react';
import LocationInput from './LocationInput';
import { Grid, Row, Col, Modal, Button } from 'react-bootstrap';
import { findHotspots } from '../utils/api';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fireRedirect: false,
      error: false
    };

    this.handleLocationSubmit = this.handleLocationSubmit.bind(this);
    this.closeErrorModal = this.closeErrorModal.bind(this);
  }
  handleLocationSubmit(locationObj) {
    let { destination, location} = locationObj;
    findHotspots(destination, location)
      .then(hotspots => {
        this.props.history.push({
          pathname: '/map',
          state: hotspots
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  };
  closeErrorModal() {
    this.setState({
      error: false
    });
  }
  render() {
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
              handleSubmit={this.handleLocationSubmit}
              formStyle={{
                display: 'flex',
                flexDirection: 'row',
              }}
            />
            <Modal show={this.state.error} onHide={this.closeErrorModal}>
              <Modal.Header closeButton>
                <Modal.Title>Beep boop.</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>We couldn't understand the search terms.</p>
                <p>Is there a typo?</p>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.closeErrorModal}>Close</Button>
              </Modal.Footer>

            </Modal>
          </Col>
        </Row>
      </Grid>
    );
  }
};

Home.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Home;
