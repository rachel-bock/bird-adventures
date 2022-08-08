import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.searchBirds(event, this.state.search)}>
        <input 
          type='text'
          placeholder='Search bird sightings'
          name='search'
          value={this.state.search}
          onChange={event => this.handleChange(event)}
          required
        />
        <button>SUBMIT</button>
      </form>
    )
  }
}

export default Form;