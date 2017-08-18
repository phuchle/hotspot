import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class LocationInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      destination: '',
      location: ''
    };

    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }
  handleDestinationChange(event) {
    this.setState({
      destination: event.target.value
    });
  }
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }
  render() {
    return (
      <form
        style={this.props.formStyle}
        onSubmit={(event) => {
          event.preventDefault();
          if (!this.state.location) {
            this.setState({ location: 'San Jose'},
            this.props.handleSubmit(this.state)
          );} else {
            this.props.handleSubmit(this.state);
          }
        }}
      >
        <FormControl
          type="text"
          placeholder="Drinks"
          value={this.state.destination}
          onChange={this.handleDestinationChange}
          style={{marginRight: '10px'}}
        />
        <FormControl
          type="text"
          placeholder="San Jose, CA"
          value={this.state.location}
          onChange={this.handleLocationChange}
          style={{marginRight: '10px'}}
        />
        <Button
          type="submit"
          bsStyle="success"
        >
          Search!
        </Button>
      </form>
    );
  }
}

LocationInput.propTypes = {
  formStyle: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
};

export default LocationInput;
