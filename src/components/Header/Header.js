import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = event => {
    this.state({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form>
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

export default Header;